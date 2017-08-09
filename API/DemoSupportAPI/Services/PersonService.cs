using DemoSupportAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoSupportAPI.Services
{
    public class PersonService
    {
        private static List<Person> people = new List<Person>()
        {
            new Person(1, "John", "Doe", 30),
            new Person(2, "Mary", "Jane", 41),
            new Person(3, "Delip", "Ramsamooj", 55),
            new Person(4, "Diego", "Dias", 23)
        };


        public List<IPerson> GetAll()
        {
            return people.ToList<IPerson>();
        }

        public IPerson Get(int id)
        {
            return people.FirstOrDefault(p => p.Id == id);
        }

        public void Save(IPerson person)
        {
            IPerson found = people.Find(p => p.Id == person.Id);
            if (found != null)
            {
                found.FirstName = person.FirstName;
                found.LastName = person.LastName;
                found.Age = person.Age;
            }
        }
    }
}
