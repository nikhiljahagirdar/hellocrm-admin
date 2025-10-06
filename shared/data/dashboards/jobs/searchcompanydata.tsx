
export const Developerdata = [
    { value: 'Frontend Developer', label: 'Frontend Developer' },
    { value: 'Backend Developer', label: 'Backend Developer' },
    { value: 'Full Stack Developer', label: 'Full Stack Developer' },
    { value: 'Cloud Engineer', label: 'Cloud Engineer' },
    { value: 'DevOps Specialist', label: 'DevOps Specialist' },
    { value: 'UI/UX Designer', label: 'UI/UX Designer' },
    { value: 'Data Scientist', label: 'Data Scientist' },
    { value: 'IT Support', label: 'IT Support' },
];

interface Company {
    name: string;
    location: string;
    industry: string;
    established: number;
    rating: string;
    employees: number;
    jobVacancies: number;
    logo: string;
    color:string;
  }
export const CompaniesTable: Company[] = [
    {
      name: 'Tech Innovations Inc.',
      location: 'New York, NY',
      industry: 'Technology',
      established: 2012,
      rating: '4.5/5',
      employees: 350,
      jobVacancies: 12,
      logo: '../../../assets/images/company-logos/1.png',
      color:'primary'
    },
    {
      name: 'Creative Solutions Ltd.',
      location: 'London, UK',
      industry: 'Consulting',
      established: 2005,
      rating: '4.2/5',
      employees: 120,
      jobVacancies: 5,
      logo: '../../../assets/images/company-logos/2.png',
      color:'secondary'
    },
    {
      name: 'GreenTech Solutions',
      location: 'San Francisco, CA',
      industry: 'Environmental',
      established: 2015,
      rating: '4.7/5',
      employees: 200,
      jobVacancies: 8,
      logo: '../../../assets/images/company-logos/3.png',
      color:'warning'
    },
    {
      name: 'BlueWave Technologies',
      location: 'Berlin, Germany',
      industry: 'IT Services',
      established: 2010,
      rating: '4.6/5',
      employees: 500,
      jobVacancies: 25,
      logo: '../../../assets/images/company-logos/4.png',
      color:'info'
    },
    {
      name: 'SoftMinds Technologies',
      location: 'Mumbai, India',
      industry: 'Software Development',
      established: 2010,
      rating: '4.3/5',
      employees: 150,
      jobVacancies: 15,
      logo: '../../../assets/images/company-logos/5.png',
      color:'success'
    },
    {
        logo: "../../../assets/images/company-logos/6.png",
        name: "NextGen Systems",
        location: "Toronto, Canada",
        industry: "Tech Startups",
        established: 2017,
        rating: '4.4/5',
        employees: 80,
        jobVacancies: 3,
      color:'danger'
      },
      {
        logo: "../../../assets/images/company-logos/7.png",
        name: "WebX Enterprises",
        location: "Sydney, Australia",
        industry: "Web Development",
        established: 2013,
        rating: '4.1/5',
        employees: 230,
        jobVacancies: 20,
      color:'teal'
      },
      {
        logo: "../../../assets/images/company-logos/8.png",
        name: "DataFusion Labs",
        location: "Singapore",
        industry: "Data Science",
        established: 2016,
        rating: '4.8/5',
        employees: 90,
        jobVacancies: 10,
      color:'pink'
      },
      {
        logo: "../../../assets/images/company-logos/9.png",
        name: "SmartSolutions Co.",
        location: "Tokyo, Japan",
        industry: "Technology",
        established: 2008,
        rating:' 4.3/5',
        employees: 400,
        jobVacancies: 18,
      color:'primary'
      },
      {
        logo: "../../../assets/images/company-logos/10.png",
        name: "Innovative Minds Ltd.",
        location: "Paris, France",
        industry: "Consulting",
        established: 2011,
        rating: '4.2/5',
        employees: 75,
        jobVacancies: 6,
      color:'pink'
      }
];
    