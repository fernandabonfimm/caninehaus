

using Amazon.Lambda.Annotations;

namespace caninehaus
{
    //execute before of lambda
    [LambdaStartup]
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
           

        }
    }
}
