using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace FluApp.Controllers
{
    public class FluController : ApiController
    {
        // GET api/values
        public async Task<object> Get()
        {
            HttpClient client = new HttpClient();
            //client.BaseAddress = new Uri("");
            string response =  await client.GetStringAsync("http://api.flutrack.org/?limit=10");
            return Newtonsoft.Json.JsonConvert.DeserializeObject(response);
        }
    }
}
