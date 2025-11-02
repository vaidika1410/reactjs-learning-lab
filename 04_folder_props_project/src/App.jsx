import Card from './components/card'

const App = () => {

  const jobs = [
    {
      companyName: "Google",
      companyLogo: "https://logo.clearbit.com/google.com",
      position: "Frontend Developer",
      tags: {
        type: "Full-time",
        level: "Junior"
      },
      pricePerHour: 45,
      city: "Bangalore",
      postedDaysAgo: 10
    },
    {
      companyName: "Amazon",
      companyLogo: "https://logo.clearbit.com/amazon.com",
      position: "Backend Engineer",
      tags: {
        type: "Full-time",
        level: "Senior"
      },
      pricePerHour: 65,
      city: "Hyderabad",
      postedDaysAgo: 7
    },
    {
      companyName: "Meta",
      companyLogo: "https://logo.clearbit.com/meta.com",
      position: "UI/UX Designer",
      tags: {
        type: "Part-time",
        level: "Junior"
      },
      pricePerHour: 35,
      city: "Pune",
      postedDaysAgo: 14
    },
    {
      companyName: "Netflix",
      companyLogo: "https://logo.clearbit.com/netflix.com",
      position: "Data Analyst",
      tags: {
        type: "Full-time",
        level: "Mid-level"
      },
      pricePerHour: 55,
      city: "Mumbai",
      postedDaysAgo: 5
    },
    {
      companyName: "Apple",
      companyLogo: "https://logo.clearbit.com/apple.com",
      position: "iOS Developer",
      tags: {
        type: "Full-time",
        level: "Senior"
      },
      pricePerHour: 70,
      city: "Delhi",
      postedDaysAgo: 3
    },
    {
      companyName: "Microsoft",
      companyLogo: "https://logo.clearbit.com/microsoft.com",
      position: "Cloud Engineer",
      tags: {
        type: "Part-time",
        level: "Mid-level"
      },
      pricePerHour: 50,
      city: "Chennai",
      postedDaysAgo: 12
    }
  ];

  return (
    <>
      <Card companyName= "Microsoft"
      companyLogo= "https://logo.clearbit.com/microsoft.com"
      position= "Cloud Engineer"
      tags= {{
        type: "Part-time",
        level: "Mid-level"
      }}
      pricePerHour= {50}
      city= "Chennai"
      postedDaysAgo= {12} />
      
      <Card companyName= "Apple"
      companyLogo= "https://logo.clearbit.com/apple.com"
      position= "iOS Developer"
      tags= {{
        type: "Full-time",
        level: "Senior"
      }}
      pricePerHour= {70}
      city= "Delhi"
      postedDaysAgo= {3}  />

      <Card companyName= "Netflix"
      companyLogo= "https://logo.clearbit.com/netflix.com"
      position= "Data Analyst"
      tags= {{
        type: "Full-time",
        level: "Mid-level"
      }}
      pricePerHour= {55}
      city= "Mumbai"
      postedDaysAgo= {5} />

      <Card companyName= "Meta"
      companyLogo= "https://logo.clearbit.com/meta.com"
      position= "UI/UX Designer"
      tags= {{
        type: "Part-time",
        level: "Junior"
      }}
      pricePerHour= {35}
      city= "Pune"
      postedDaysAgo= {14} /> 

      <Card companyName= "Amazon"
      companyLogo= "https://logo.clearbit.com/amazon.com"
      position= "Backend Engineer"
      tags= {{
        type: "Full-time",
        level: "Senior"
      }}
      pricePerHour= {65}
      city= "Hyderabad"
      postedDaysAgo= {7} />

      <Card companyName= "Google"
      companyLogo= "https://logo.clearbit.com/google.com"
      position= "Frontend Developer"
      tags= {{
        type: "Full-time",
        level: "Junior"
      }}
      pricePerHour= {45}
      city= "Bangalore"
      postedDaysAgo= {1} />
    </>
  )
}

export default App