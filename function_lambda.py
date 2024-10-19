import boto3
import json

def lambda_handler(event, context):
    bedrock = boto3.client(
        service_name='bedrock-runtime',
        region_name='us-west-2'
        )

    input = {
        "modelId": "us.meta.llama3-2-3b-instruct-v1:0",
        "contentType": "application/json",
    }
    response = bedrock.invoke_model(body=event['body'],
                                    modelId=input["modelId"],
                                    contentType=input["contentType"])
    
    response_content = response['body'].read()
    result = json.loads(response_content)
    print(result)

    return {
        "statusCode": 200,
        "body": json.dumps(result)
    }
