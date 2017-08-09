using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoSupportAPI.Models
{
    public interface IPerson
    {
        int Id { get; set; }
        string FirstName { get; set; }
        string LastName { get; set; }
        int Age { get; set; }
    }

    public class Person : IPerson
    {
        public Person() { }
        public Person(int id, string firstName, string lastName, int age)
        {
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Age = age;
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set;  }
        public int Age { get; set;  }
    }
}
