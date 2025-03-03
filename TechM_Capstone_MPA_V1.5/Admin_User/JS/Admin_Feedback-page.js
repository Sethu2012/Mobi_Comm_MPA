// Sample Data (In a real application, this would be fetched from an API)
const admins = [
    {
        admin_id: 1,
        name: "Admin1",
        email: "admin1@example.com",
        password: "hashed_password",
        role: "Super Admin",
        created_at: "2025-02-26T10:00:00Z"
    }
];

// Subscribers 
const subscribers = [
    {
        subscriber_id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        mobile_number: "123-456-7890",
        status: "Active",
        location: "Mumbai",
        plan_id: 1,
        expires_on: "2025-03-01",
        created_at: "2025-02-01T10:00:00Z"
    },
    {
        subscriber_id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        mobile_number: "987-654-3210",
        status: "Active",
        location: "Delhi",
        plan_id: 3,
        expires_on: "2025-03-15",
        created_at: "2025-01-15T10:00:00Z"
    },
    {
        subscriber_id: 3,
        name: "David Lee",
        email: "david.lee@example.com",
        mobile_number: "555-123-4567",
        status: "Active",
        location: "Bangalore",
        plan_id: 5,
        expires_on: "2025-03-10",
        created_at: "2025-02-10T12:30:00Z"
    },
    {
        subscriber_id: 4,
        name: "Emily Wong",
        email: "emily.wong@example.com",
        mobile_number: "111-222-3333",
        status: "Active",
        location: "Kolkata",
        plan_id: 8,
        expires_on: "2025-03-20",
        created_at: "2024-12-01T09:45:00Z"
    },
    {
        subscriber_id: 5,
        name: "Alice Brown",
        email: "alice.brown@example.com",
        mobile_number: "444-555-6666",
        status: "Expiring",
        location: "Chennai",
        plan_id: 9,
        expires_on: "2025-02-28",
        created_at: "2025-02-20T16:15:00Z"
    },
    {
        subscriber_id: 6,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        mobile_number: "777-888-9999",
        status: "Active",
        location: "Hyderabad",
        plan_id: 5,
        expires_on: "2025-03-05",
        created_at: "2025-01-25T11:20:00Z"
    },
    {
        subscriber_id: 7,
        name: "Charlie Davis",
        email: "charlie.davis@example.com",
        mobile_number: "333-444-5555",
        status: "Active",
        location: "Pune",
        plan_id: 4,
        expires_on: "2025-03-12",
        created_at: "2025-02-05T15:45:00Z"
    },
    {
        subscriber_id: 8,
        name: "George Adams",
        email: "george.adams@example.com",
        mobile_number: "123-987-6543",
        status: "Expired",
        location: "Bhopal",
        plan_id: 1,
        expires_on: "2025-02-23",
        created_at: "2025-01-22T08:00:00Z"
    },
    {
        subscriber_id: 9,
        name: "Hannah Green",
        email: "hannah.green@example.com",
        mobile_number: "555-789-1234",
        status: "Expired",
        location: "Surat",
        plan_id: 3,
        expires_on: "2025-02-24",
        created_at: "2025-01-21T09:30:00Z"
    },
    {
        subscriber_id: 10,
        name: "Ian Baker",
        email: "ian.baker@example.com",
        mobile_number: "666-333-2222",
        status: "Expired",
        location: "Nagpur",
        plan_id: 6,
        expires_on: "2025-02-25",
        created_at: "2025-01-19T14:00:00Z"
    },
    {
        subscriber_id: 11,
        name: "Virat Kohli",
        email: "virat.kohli@example.com",
        mobile_number: "987-654-3210",
        status: "Active",
        location: "Delhi",
        plan_id: 5,
        expires_on: "2025-03-15",
        created_at: "2025-01-20T14:00:00Z"
    },
    {
        subscriber_id: 12,
        name: "MS Dhoni",
        email: "ms.dhoni@example.com",
        mobile_number: "555-123-4567",
        status: "Active",
        location: "Ranchi",
        plan_id: 6,
        expires_on: "2025-03-10",
        created_at: "2025-02-05T12:30:00Z"
    },
    {
        subscriber_id: 13,
        name: "Rajinikanth",
        email: "rajinikanth@example.com",
        mobile_number: "888-222-9999",
        status: "Active",
        location: "Chennai",
        plan_id: 7,
        expires_on: "2025-04-01",
        created_at: "2024-12-01T09:45:00Z"
    },
    {
        subscriber_id: 14,
        name: "Kamal Haasan",
        email: "kamal.haasan@example.com",
        mobile_number: "777-888-9999",
        status: "Active",
        location: "Chennai",
        plan_id: 4,
        expires_on: "2025-03-05",
        created_at: "2025-02-15T11:20:00Z"
    },
    {
        subscriber_id: 15,
        name: "Shikhar Dhawan",
        email: "shikhar.dhawan@example.com",
        mobile_number: "333-444-5555",
        status: "Active",
        location: "Delhi",
        plan_id: 3,
        expires_on: "2025-03-12",
        created_at: "2025-02-20T14:15:00Z"
    },
    {
        subscriber_id: 16,
        name: "Dhanush",
        email: "dhanush@example.com",
        mobile_number: "555-000-1111",
        status: "Expiring",
        location: "Madurai",
        plan_id: 6,
        expires_on: "2025-02-28",
        created_at: "2025-01-22T10:00:00Z"
    },
    {
        subscriber_id: 17,
        name: "Rohit Sharma",
        email: "rohit.sharma@example.com",
        mobile_number: "999-888-7777",
        status: "Active",
        location: "Mumbai",
        plan_id: 4,
        expires_on: "2025-03-20",
        created_at: "2025-01-25T13:00:00Z"
    },
    {
        subscriber_id: 18,
        name: "Hardik Pandya",
        email: "hardik.pandya@example.com",
        mobile_number: "888-555-4444",
        status: "Active",
        location: "Baroda",
        plan_id: 5,
        expires_on: "2025-03-12",
        created_at: "2025-02-15T11:30:00Z"
    },
    {
        subscriber_id: 19,
        name: "Ajith Kumar",
        email: "ajith.kumar@example.com",
        mobile_number: "777-999-8888",
        status: "Active",
        location: "Chennai",
        plan_id: 7,
        expires_on: "2025-04-01",
        created_at: "2024-12-10T10:00:00Z"
    },
    {
        subscriber_id: 20,
        name: "Vijay",
        email: "vijay@example.com",
        mobile_number: "333-111-2222",
        status: "Active",
        location: "Chennai",
        plan_id: 2,
        expires_on: "2025-03-15",
        created_at: "2025-02-12T14:15:00Z"
    },
    {
        subscriber_id: 21,
        name: "Kedar Jadhav",
        email: "kedar.jadhav@example.com",
        mobile_number: "555-333-2222",
        status: "Expiring",
        location: "Pune",
        plan_id: 6,
        expires_on: "2025-02-28",
        created_at: "2025-01-22T10:00:00Z"
    },
    {
        subscriber_id: 22,
        name: "Suresh Raina",
        email: "suresh.raina@example.com",
        mobile_number: "999-000-1111",
        status: "Active",
        location: "Delhi",
        plan_id: 7,
        expires_on: "2025-04-15",
        created_at: "2024-12-20T09:30:00Z"
    },
    {
        subscriber_id: 23,
        name: "Shubman Gill",
        email: "shubman.gill@example.com",
        mobile_number: "888-999-0000",
        status: "Active",
        location: "Punjab",
        plan_id: 3,
        expires_on: "2025-03-30",
        created_at: "2025-01-15T10:00:00Z"
    },
    {
        subscriber_id: 24,
        name: "Ravindra Jadeja",
        email: "ravindra.jadeja@example.com",
        mobile_number: "777-666-5555",
        status: "Active",
        location: "Rajkot",
        plan_id: 4,
        expires_on: "2025-03-25",
        created_at: "2025-02-10T12:30:00Z"
    },
    {
        subscriber_id: 25,
        name: "Karthi",
        email: "karthi@example.com",
        mobile_number: "666-555-4444",
        status: "Active",
        location: "Chennai",
        plan_id: 7,
        expires_on: "2025-04-01",
        created_at: "2024-12-10T10:00:00Z"
    },
    {
        subscriber_id: 26,
        name: "Trisha Krishnan",
        email: "trisha@example.com",
        mobile_number: "444-333-2222",
        status: "Active",
        location: "Chennai",
        plan_id: 2,
        expires_on: "2025-03-15",
        created_at: "2025-02-12T14:15:00Z"
    },
    {
        subscriber_id: 27,
        name: "Ajay Devgn",
        email: "ajay.devgn@example.com",
        mobile_number: "999-111-2222",
        status: "Expiring",
        location: "Mumbai",
        plan_id: 6,
        expires_on: "2025-02-28",
        created_at: "2025-01-22T10:00:00Z"
    },
    {
        subscriber_id: 28,
        name: "Samantha Ruth Prabhu",
        email: "samantha@example.com",
        mobile_number: "888-777-6666",
        status: "Active",
        location: "Hyderabad",
        plan_id: 7,
        expires_on: "2025-04-15",
        created_at: "2024-12-20T09:30:00Z"
    },
    {
        subscriber_id: 29,
        name: "Byju Raveendran",
        email: "byju.raveendran@example.com",
        mobile_number: "999-888-7777",
        status: "Active",
        location: "Bangalore",
        plan_id: 7,
        expires_on: "2025-04-01",
        created_at: "2024-12-20T09:30:00Z"
    },
    {
        subscriber_id: 30,
        name: "Deepinder Goyal",
        email: "deepinder.goyal@example.com",
        mobile_number: "888-555-4444",
        status: "Active",
        location: "Delhi",
        plan_id: 3,
        expires_on: "2025-03-15",
        created_at: "2025-02-10T12:30:00Z"
    },
    {
        subscriber_id: 31,
        name: "Bhavish Aggarwal",
        email: "bhavish.aggarwal@example.com",
        mobile_number: "777-666-5555",
        status: "Active",
        location: "Bangalore",
        plan_id: 6,
        expires_on: "2025-03-20",
        created_at: "2025-02-15T11:20:00Z"
    },
    {
        subscriber_id: 32,
        name: "Manish Singh",
        email: "manish.singh@example.com",
        mobile_number: "333-222-1111",
        status: "Active",
        location: "Delhi",
        plan_id: 7,
        expires_on: "2025-04-01",
        created_at: "2024-12-10T10:00:00Z"
    },
    {
        subscriber_id: 33,
        name: "Vidit Aatrey",
        email: "vidit.aatrey@example.com",
        mobile_number: "555-444-3333",
        status: "Expiring",
        location: "Bangalore",
        plan_id: 4,
        expires_on: "2025-02-28",
        created_at: "2025-01-22T10:00:00Z"
    },
    {
        subscriber_id: 34,
        name: "Siddhant Thakran",
        email: "siddhant.thakran@example.com",
        mobile_number: "999-000-1111",
        status: "Active",
        location: "Delhi",
        plan_id: 7,
        expires_on: "2025-04-15",
        created_at: "2024-12-20T09:30:00Z"
    }
];

// Plans 
const plans = [
    // Popular Plans
    {
        plan_id: 1,
        category: "Popular",
        plan_name: "Popular 149",
        price: 149,
        validity: 28,
        data_per_day: "1GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 2,
        category: "Popular",
        plan_name: "Popular 199",
        price: 199,
        validity: 28,
        data_per_day: "1.5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 3,
        category: "Popular",
        plan_name: "Popular 399",
        price: 399,
        validity: 56,
        data_per_day: "3GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 4,
        category: "Popular",
        plan_name: "Popular 599",
        price: 599,
        validity: 84,
        data_per_day: "2GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 5,
        category: "Popular",
        plan_name: "Popular 799",
        price: 799,
        validity: 84,
        data_per_day: "2.5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 6,
        category: "Popular",
        plan_name: "Popular 999",
        price: 999,
        validity: 90,
        data_per_day: "3GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "OTT",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 7,
        category: "Popular",
        plan_name: "Popular 129",
        price: 129,
        validity: 24,
        data_per_day: "1.25GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 8,
        category: "Popular",
        plan_name: "Popular 359",
        price: 359,
        validity: 56,
        data_per_day: "2.5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 9,
        category: "Popular",
        plan_name: "Popular 499",
        price: 499,
        validity: 84,
        data_per_day: "4GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 10,
        category: "Popular",
        plan_name: "Popular 699",
        price: 699,
        validity: 100,
        data_per_day: "5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    
    // 5G Unlimited Plans
    {
        plan_id: 11,
        category: "5G Unlimited",
        plan_name: "5G Ultra 299",
        price: 299,
        validity: 28,
        data_per_day: "Unlimited 5G",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 12,
        category: "5G Unlimited",
        plan_name: "5G Ultra 499",
        price: 499,
        validity: 56,
        data_per_day: "Unlimited 5G",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "OTT",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 13,
        category: "5G Unlimited",
        plan_name: "5G Ultra 199",
        price: 199,
        validity: 14,
        data_per_day: "Unlimited 5G",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 14,
        category: "5G Unlimited",
        plan_name: "5G Ultra 399",
        price: 399,
        validity: 42,
        data_per_day: "Unlimited 5G",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "OTT",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 15,
        category: "5G Unlimited",
        plan_name: "5G Ultra 599",
        price: 599,
        validity: 70,
        data_per_day: "Unlimited 5G",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 16,
        category: "5G Unlimited",
        plan_name: "5G Ultra 799",
        price: 799,
        validity: 98,
        data_per_day: "Unlimited 5G",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "OTT",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 17,
        category: "5G Unlimited",
        plan_name: "5G Ultra 999",
        price: 999,
        validity: 126,
        data_per_day: "Unlimited 5G",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 18,
        category: "5G Unlimited",
        plan_name: "5G Ultra 1199",
        price: 1199,
        validity: 154,
        data_per_day: "Unlimited 5G",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "OTT",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 19,
        category: "5G Unlimited",
        plan_name: "5G Ultra 1399",
        price: 1399,
        validity: 182,
        data_per_day: "Unlimited 5G",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 20,
        category: "5G Unlimited",
        plan_name: "5G Ultra 1599",
        price: 1599,
        validity: 210,
        data_per_day: "Unlimited 5G",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "OTT",
        created_at: "2024-10-01T09:30:00Z"
    },
    
    // Entertainment Plans
    {
        plan_id: 21,
        category: "Entertainment",
        plan_name: "OTT 599",
        price: 599,
        validity: 28,
        data_per_day: "2GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "Netflix",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 22,
        category: "Entertainment",
        plan_name: "OTT 799",
        price: 799,
        validity: 28,
        data_per_day: "2.5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "Netflix, Prime",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 23,
        category: "Entertainment",
        plan_name: "OTT 699",
        price: 699,
        validity: 28,
        data_per_day: "2GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "Prime",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 24,
        category: "Entertainment",
        plan_name: "OTT 899",
        price: 899,
        validity: 28,
        data_per_day: "2.5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "Netflix, Prime, Hotstar",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 25,
        category: "Entertainment",
        plan_name: "OTT 999",
        price: 999,
        validity: 56,
        data_per_day: "3GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "Netflix, Prime",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 26,
        category: "Entertainment",
        plan_name: "OTT 1099",
        price: 1099,
        validity: 56,
        data_per_day: "3.5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "Netflix, Prime, Hotstar",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 27,
        category: "Entertainment",
        plan_name: "OTT 1199",
        price: 1199,
        validity: 84,
        data_per_day: "4GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "Netflix, Prime",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 28,
        category: "Entertainment",
        plan_name: "OTT 1299",
        price: 1299,
        validity: 84,
        data_per_day: "4.5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "Netflix, Prime, Hotstar",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 29,
        category: "Entertainment",
        plan_name: "OTT 1399",
        price: 1399,
        validity: 84,
        data_per_day: "5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "Netflix, Prime",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 30,
        category: "Entertainment",
        plan_name: "OTT 1499",
        price: 1499,
        validity: 84,
        data_per_day: "5.5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "Netflix, Prime, Hotstar",
        created_at: "2024-10-01T09:30:00Z"
    },
    
    // Annual Plans
    {
        plan_id: 31,
        category: "Annual",
        plan_name: "Annual 1499",
        price: 1499,
        validity: 365,
        data_per_day: "1.5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 32,
        category: "Annual",
        plan_name: "Annual 2199",
        price: 2199,
        validity: 365,
        data_per_day: "2GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 33,
        category: "Annual",
        plan_name: "Annual 1999",
        price: 1999,
        validity: 365,
        data_per_day: "1.75GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 34,
        category: "Annual",
        plan_name: "Annual 2499",
        price: 2499,
        validity: 365,
        data_per_day: "2.25GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 35,
        category: "Annual",
        plan_name: "Annual 2999",
        price: 2999,
        validity: 365,
        data_per_day: "2.5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 36,
        category: "Annual",
        plan_name: "Annual 3499",
        price: 3499,
        validity: 365,
        data_per_day: "3GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 37,
        category: "Annual",
        plan_name: "Annual 3999",
        price: 3999,
        validity: 365,
        data_per_day: "3.5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 38,
        category: "Annual",
        plan_name: "Annual 4499",
        price: 4499,
        validity: 365,
        data_per_day: "4GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 39,
        category: "Annual",
        plan_name: "Annual 4999",
        price: 4999,
        validity: 365,
        data_per_day: "4.5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 40,
        category: "Annual",
        plan_name: "Annual 5499",
        price: 5499,
        validity: 365,
        data_per_day: "5GB",
        voice_calls: "Unlimited",
        messages: "100/Day",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    
    // Data Add-ons
    {
        plan_id: 41,
        category: "Data Add-on",
        plan_name: "Add-on 48",
        price: 48,
        validity: 1,
        data_per_day: "3GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 42,
        category: "Data Add-on",
        plan_name: "Add-on 98",
        price: 98,
        validity: 28,
        data_per_day: "12GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 43,
        category: "Data Add-on",
        plan_name: "Add-on 128",
        price: 128,
        validity: 30,
        data_per_day: "15GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 44,
        category: "Data Add-on",
        plan_name: "Add-on 198",
        price: 198,
        validity: 60,
        data_per_day: "20GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 45,
        category: "Data Add-on",
        plan_name: "Add-on 298",
        price: 298,
        validity: 90,
        data_per_day: "25GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 46,
        category: "Data Add-on",
        plan_name: "Add-on 398",
        price: 398,
        validity: 120,
        data_per_day: "30GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 47,
        category: "Data Add-on",
        plan_name: "Add-on 498",
        price: 498,
        validity: 150,
        data_per_day: "35GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 48,
        category: "Data Add-on",
        plan_name: "Add-on 598",
        price: 598,
        validity: 180,
        data_per_day: "40GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 49,
        category: "Data Add-on",
        plan_name: "Add-on 698",
        price: 698,
        validity: 210,
        data_per_day: "45GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 50,
        category: "Data Add-on",
        plan_name: "Add-on 798",
        price: 798,
        validity: 240,
        data_per_day: "50GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    
    // International Plans
    {
        plan_id: 51,
        category: "International",
        plan_name: "Global 499",
        price: 499,
        validity: 7,
        data_per_day: "1GB",
        voice_calls: "100 mins",
        messages: "100 SMS",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 52,
        category: "International",
        plan_name: "Global 999",
        price: 999,
        validity: 28,
        data_per_day: "3GB",
        voice_calls: "Unlimited",
        messages: "300 SMS",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 53,
        category: "International",
        plan_name: "Global 599",
        price: 599,
        validity: 14,
        data_per_day: "2GB",
        voice_calls: "Unlimited",
        messages: "300 SMS",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 54,
        category: "International",
        plan_name: "Global 1499",
        price: 1499,
        validity: 30,
        data_per_day: "5GB",
        voice_calls: "Unlimited",
        messages: "300 SMS",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 55,
        category: "International",
        plan_name: "Global 1999",
        price: 1999,
        validity: 45,
        data_per_day: "7GB",
        voice_calls: "Unlimited",
        messages: "300 SMS",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 56,
        category: "International",
        plan_name: "Global 2499",
        price: 2499,
        validity: 60,
        data_per_day: "10GB",
        voice_calls: "Unlimited",
        messages: "300 SMS",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 57,
        category: "International",
        plan_name: "Global 2999",
        price: 2999,
        validity: 75,
        data_per_day: "15GB",
        voice_calls: "Unlimited",
        messages: "300 SMS",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 58,
        category: "International",
        plan_name: "Global 3499",
        price: 3499,
        validity: 90,
        data_per_day: "20GB",
        voice_calls: "Unlimited",
        messages: "300 SMS",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 59,
        category: "International",
        plan_name: "Global 3999",
        price: 3999,
        validity: 100,
        data_per_day: "25GB",
        voice_calls: "Unlimited",
        messages: "300 SMS",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 60,
        category: "International",
        plan_name: "Global 4499",
        price: 4499,
        validity: 120,
        data_per_day: "30GB",
        voice_calls: "Unlimited",
        messages: "300 SMS",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    
    // Redemption Plans
    {
        plan_id: 61,
        category: "Redemption",
        plan_name: "Redeem 49",
        price: 49,
        validity: 28,
        data_per_day: "5GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 62,
        category: "Redemption",
        plan_name: "Redeem 99",
        price: 99,
        validity: 56,
        data_per_day: "10GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 63,
        category: "Redemption",
        plan_name: "Redeem 149",
        price: 149,
        validity: 84,
        data_per_day: "15GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 64,
        category: "Redemption",
        plan_name: "Redeem 199",
        price: 199,
        validity: 112,
        data_per_day: "20GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 65,
        category: "Redemption",
        plan_name: "Redeem 249",
        price: 249,
        validity: 140,
        data_per_day: "25GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 66,
        category: "Redemption",
        plan_name: "Redeem 299",
        price: 299,
        validity: 168,
        data_per_day: "30GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 67,
        category: "Redemption",
        plan_name: "Redeem 349",
        price: 349,
        validity: 196,
        data_per_day: "35GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 68,
        category: "Redemption",
        plan_name: "Redeem 399",
        price: 399,
        validity: 224,
        data_per_day: "40GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 69,
        category: "Redemption",
        plan_name: "Redeem 449",
        price: 449,
        validity: 252,
        data_per_day: "45GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 70,
        category: "Redemption",
        plan_name: "Redeem 499",
        price: 499,
        validity: 280,
        data_per_day: "50GB",
        voice_calls: "N/A",
        messages: "N/A",
        OTTs: "",
        created_at: "2024-10-01T09:30:00Z"
    }
];

// Plan categories with 5G indicator
let planCategories = [
    { name: "Popular", is5G: false },
    { name: "5G Unlimited", is5G: true },
    { name: "Entertainment", is5G: false },
    { name: "Annual", is5G: false },
    { name: "Data Add-on", is5G: false },
    { name: "International", is5G: false },
    { name: "Redemption", is5G: false }
];

// Mock Feedback Data -  **ADD THIS**
const feedbacks = [
    { feedback_id: 1, subscriber_id: 1, message: "Great service!", status: "Unread", created_at: "2025-02-26T12:00:00Z" },
    { feedback_id: 2, subscriber_id: 2, message: "Need better support.", status: "Read", created_at: "2025-02-25T10:00:00Z" },
    { feedback_id: 3, subscriber_id: 1, message: "Excellent plans!", status: "Unread", created_at: "2025-02-24T14:00:00Z" },
    { feedback_id: 4, subscriber_id: 3, message: "Terrible service!", status: "Read", created_at: "2025-02-27T13:00:00Z" }
];

// DOM elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initPage();

    // Event listeners
    document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);
    document.getElementById('themeToggle').addEventListener('change', toggleTheme);
    document.getElementById('sendReplyBtn').addEventListener('click', handleReply);

    // Check system theme preference
    checkSystemThemePreference();
});

// Initialize the page
function initPage() {
    loadFeedbackData();
    updateNotificationCount();
    setAdminInfo();
}

// Load and display feedback data
function loadFeedbackData() {
    // Clear existing feedback containers
    const unreadContainer = document.getElementById('unreadFeedbackContainer');
    const readContainer = document.getElementById('readFeedbackContainer');

    // Filter feedbacks by status
    const unreadFeedbacks = feedbacks.filter(feedback => feedback.status === 'Unread');
    const readFeedbacks = feedbacks.filter(feedback => feedback.status === 'Read');

    // Update counts
    updateFeedbackCounts(unreadFeedbacks.length, readFeedbacks.length);

    // Show/hide "no feedback" messages
    document.getElementById('noUnreadMessage').style.display = unreadFeedbacks.length > 0 ? 'none' : 'block';
    document.getElementById('noReadMessage').style.display = readFeedbacks.length > 0 ? 'none' : 'block';

    // Render feedback cards
    unreadFeedbacks.forEach(feedback => {
        unreadContainer.appendChild(createFeedbackCard(feedback, 'unread'));
    });

    readFeedbacks.forEach(feedback => {
        readContainer.appendChild(createFeedbackCard(feedback, 'read'));
    });
}

// Function to update feedback counts
function updateFeedbackCounts(unreadCount, readCount) {
    document.getElementById('unreadCount').textContent = unreadCount;
    document.getElementById('readCount').textContent = readCount;
    document.getElementById('unreadBadge').textContent = unreadCount;
}

// Create a feedback card element
function createFeedbackCard(feedback, type) {
    // Find subscriber info
    const subscriber = subscribers.find(sub => sub.subscriber_id === feedback.subscriber_id);
    if (!subscriber) return null;

    // Create card element
    const card = document.createElement('div');
    card.className = 'card mb-3 feedback-card';
    card.dataset.feedbackId = feedback.feedback_id;

    // Format date
    const feedbackDate = new Date(feedback.created_at);
    const formattedDate = feedbackDate.toLocaleString();

    // Card content
    card.innerHTML = `
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                    <h5 class="card-title mb-1">${subscriber.name}</h5>
                    <p class="card-subtitle text-muted mb-0 small">
                        <i class="bi bi-envelope"></i> ${subscriber.email} |
                        <i class="bi bi-phone"></i> ${subscriber.mobile_number}
                    </p>
                </div>
                <span class="badge ${subscriber.status === 'Active' ? 'bg-success' : 'bg-secondary'}">${subscriber.status}</span>
            </div>

            <div class="card-text mb-3">
                <p class="message-text">${feedback.message}</p>
                <small class="text-muted">Received on: ${formattedDate}</small>
            </div>

            <div class="d-flex justify-content-end">
                <button class="btn btn-sm btn-outline-primary reply-btn" data-bs-toggle="modal" data-bs-target="#replyModal">Reply</button>
            </div>
        </div>
    `;

    const replyButton = card.querySelector('.reply-btn');
    replyButton.addEventListener('click', () => {
        populateReplyModal(feedback, subscriber);
    });
    return card;
}

function populateReplyModal(feedback, subscriber) {
    document.getElementById('modalSubscriberName').textContent = subscriber.name;
    document.getElementById('modalFeedbackMessage').textContent = feedback.message;
    document.getElementById('modalFeedbackTime').textContent = new Date(feedback.created_at).toLocaleString();
    document.getElementById('feedbackId').value = feedback.feedback_id; // Store the feedback_id in the modal
}

// Handle sending a reply
function handleReply() {
    const feedbackId = document.getElementById('feedbackId').value;
    const replyMessage = document.getElementById('replyMessage').value;
    const replyMethod = document.querySelector('input[name="replyMethod"]:checked').value;

    // Basic form validation
    if (!replyMessage) {
        document.getElementById('replyMessage').classList.add('is-invalid');
        return;
    } else {
        document.getElementById('replyMessage').classList.remove('is-invalid');
    }

    // Here you would typically send the reply to your server
    // using an AJAX request (e.g., fetch).  For this example, we'll
    // just simulate a successful reply.

    console.log("Replying to feedback ID:", feedbackId);
    console.log("Reply message:", replyMessage);
    console.log("Reply method:", replyMethod);

    // Simulate success
    showConfirmationToast("Reply sent successfully!");
    // Close the modal
    const replyModal = bootstrap.Modal.getInstance(document.getElementById('replyModal'));
    replyModal.hide();

    //Clear the reply message
    document.getElementById('replyMessage').value = '';
}

function showConfirmationToast(message) {
    const toastElement = document.getElementById('confirmationToast');
    const toastBody = document.getElementById('toastMessage');
    toastBody.textContent = message;

    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}

// Toggle sidebar visibility
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.querySelector('.main-content').classList.toggle('sidebar-expanded');
}

// Toggle theme (light/dark)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Store the theme preference in local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Check system theme preference on load
function checkSystemThemePreference() {
    const theme = localStorage.getItem('theme');
    const body = document.body;

    if (theme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        document.getElementById('themeToggle').checked = true;
    } else if (theme === 'light') {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        document.getElementById('themeToggle').checked = false;
    } else {
        // If no theme is stored, check the system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            document.getElementById('themeToggle').checked = true;
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            document.getElementById('themeToggle').checked = false;
        }
    }
}

// Update notification count (Placeholder - replace with actual logic)
function updateNotificationCount() {
    // In a real application, you would fetch the notification count from the server
    const count = 5;
    document.querySelector('.notification-badge').textContent = count;
}

// Set admin information (Placeholder - replace with actual logic)
function setAdminInfo() {
    // In a real application, you would fetch the admin information from the server
    document.getElementById('adminName').textContent = admins[0].name;
}
