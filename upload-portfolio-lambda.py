import boto3
import zipfile
import StringIO
import mimetypes

def lambda_handler(event, context):

    sns = boto3.resource('sns', region_name='eu-west-1')
    topic = sns.Topic('arn:aws:sns:eu-west-1:980732202800:PortfolioBuildNotification')

    try:
        s3 = boto3.resource('s3')
        build_bucket = s3.Bucket('davebrowns-serverless-portfolio-build')
        bucket = s3.Bucket('davebrowns-serverless-portfolio')
        portfolio_zip = StringIO.StringIO()

        build_bucket.download_fileobj('portfoliobuild.zip',portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                mime_type = mimetypes.guess_type(nm)

                bucket.upload_fileobj(obj,nm,
                    ExtraArgs={'ContentType' : str(mimetypes.guess_type(nm)[0])})
                bucket.Object(nm).Acl().put(ACL='public-read')


        topic.publish(Subject="New Portfolio Deployment", Message="A new deployment has been made")
    except:
        topic.publish(Subject="New Portfolio Deployment Failure", Message="Deployment failed")
        raise

    return 'Hello from Lambda'
