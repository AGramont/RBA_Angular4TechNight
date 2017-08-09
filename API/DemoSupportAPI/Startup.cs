using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using DemoSupportAPI.Services;

namespace DemoSupportAPI
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();

            
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();

            // Add a very generous CORS policy for any method, any header and all users
            // Your security team now hates you.
            // Source: http://www.hubfly.com/blog/solutions/how-to-fix-angular-4-api-call-issues/
            services.AddCors(options =>
            {
                options.AddPolicy("CORS",
                    corsPolicyBuilder => corsPolicyBuilder.AllowAnyOrigin()
                    // Apply CORS policy for any type of origin
                    .AllowAnyMethod() // Apply CORS policy for any type of http methods
                    .AllowAnyHeader() // Apply CORS policy for any headers
                    .AllowCredentials() // Apply CORS policy for all users
                );
            });



            services.AddSingleton(typeof(PersonService));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors("CORS"); // Apply the CORS options to all requests

            app.UseMvc();
        }
    }
}
