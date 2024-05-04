using Amazon.Lambda.Annotations;
using Amazon.Lambda.Core;
using caninehaus.model.Interface;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace caninehaus;
public class Function {

    

        [LambdaFunction]
        public async Task<UserModel> InsertAsync(CloudWatchEvent<UserModel> input, ILambdaContext context)
        {
           
        }

    }

