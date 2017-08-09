using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DemoSupportAPI.Models;
using DemoSupportAPI.Services;

namespace DemoSupportAPI.Controllers
{
    [Route("api/[controller]")]
    public class PersonController : Controller
    {
        private PersonService personService;
        public PersonController(PersonService personService)
        {
            this.personService = personService;
        }

        // GET api/values
        [HttpGet]
        public async Task<IEnumerable<IPerson>> Get()
        {
            await Task.Delay(3000); // <-- Coffee break!
            if (personService != null)
            {
                return personService.GetAll();
            }
            return new List<Person>();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IPerson Get(int id)
        {
            if (personService != null)
            {
                return personService.Get(id);
            }
            return null;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Person person)
        {
            this.personService.Save(person);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
