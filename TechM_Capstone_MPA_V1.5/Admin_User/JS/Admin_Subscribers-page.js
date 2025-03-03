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

// Blocked Subscribers
let blockedSubscribers = [];

// Global variables
let currentPageActive = 1;
let itemsPerPage = 5;
let filteredSubscribers = [];
let selectedSubscribers = new Set();
let selectedBlockedSubscribers = new Set();

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initializePage();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set theme based on time of day
    //setThemeBasedOnTime();
});

// Initialize Page
function initializePage() {
    // Set admin name
    document.getElementById('admin-name').textContent = admins[0].name;
    
    // Load subscriber data
    filteredSubscribers = [...subscribers];
    renderSubscribersTable();
    
    // Populate plan dropdown in subscriber modal
    populatePlanDropdown();
    
    // Set up pagination
    setupPagination();
    
    // Update subscriber counts
    updateSubscriberCounts();
}

// Set up event listeners
function setupEventListeners() {
    // Theme toggle
    //document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Search functionality
    document.getElementById('subscriber-search').addEventListener('input', handleSearchInput);
    
    // Filter buttons
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
    document.getElementById('clear-filters').addEventListener('click', clearFilters);
    
    // Show/Hide blocked subscribers
    document.getElementById('show-blocked').addEventListener('change', toggleBlockedSubscribers);
    
    // Selection checkboxes
    document.getElementById('select-all-active').addEventListener('change', selectAllActive);
    document.getElementById('select-all-blocked').addEventListener('change', selectAllBlocked);
    
    // Bulk action buttons
    document.getElementById('bulk-notify').addEventListener('click', bulkNotifySubscribers);
    document.getElementById('bulk-block').addEventListener('click', bulkBlockSubscribers);
    document.getElementById('bulk-unblock').addEventListener('click', bulkUnblockSubscribers);
    
    // Profile form submission
    document.getElementById('save-profile').addEventListener('click', saveProfile);
    
    // Subscriber form submission
    document.getElementById('save-subscriber').addEventListener('click', saveSubscriber);
    
    // Block/Unblock confirmation
    document.getElementById('confirm-block').addEventListener('click', confirmBlockSubscriber);
    document.getElementById('confirm-unblock').addEventListener('click', confirmUnblockSubscriber);
    
    // Notify confirmation
    document.getElementById('confirm-notify').addEventListener('click', confirmNotifySubscriber);
}

// // Set theme based on time of day
// function setThemeBasedOnTime() {
//     const currentHour = new Date().getHours();
//     const isDarkTime = currentHour < 6 || currentHour >= 18; // Dark mode between 6 PM and 6 AM
    
//     if (isDarkTime) {
//         document.body.classList.remove('light-mode');
//         document.body.classList.add('dark-mode');
//         document.getElementById('theme-toggle').innerHTML = '<i class="bi bi-sun me-2"></i> Light Mode';
//     } else {
//         document.body.classList.remove('dark-mode');
//         document.body.classList.add('light-mode');
//         //document.getElementById('theme-toggle').innerHTML = '<i class="bi bi-moon me-2"></i> Dark Mode';
//     }
// }

// // Toggle theme
// function toggleTheme() {
//     const themeToggleBtn = document.getElementById('theme-toggle');
    
//     if (document.body.classList.contains('light-mode')) {
//         document.body.classList.remove('light-mode');
//         document.body.classList.add('dark-mode');
//         themeToggleBtn.innerHTML = '<i class="bi bi-sun me-2"></i> Light Mode';
//     } else {
//         document.body.classList.remove('dark-mode');
//         document.body.classList.add('light-mode');
//         themeToggleBtn.innerHTML = '<i class="bi bi-moon me-2"></i> Dark Mode';
//     }
// }

// Handle search input
function handleSearchInput(e) {
    const searchTerm = e.target.value.toLowerCase();
    const suggestionsContainer = document.getElementById('search-suggestions');
    
    if (searchTerm.length < 2) {
        suggestionsContainer.classList.add('d-none');
        return;
    }
    
    // Create suggestions based on search term
    const suggestions = subscribers.filter(sub => 
        sub.name.toLowerCase().includes(searchTerm) || 
        sub.mobile_number.includes(searchTerm) || 
        sub.location.toLowerCase().includes(searchTerm) || 
        getPlanName(sub.plan_id).toLowerCase().includes(searchTerm)
    ).slice(0, 5); // Limit to 5 suggestions
    
    if (suggestions.length > 0) {
        suggestionsContainer.innerHTML = '';
        suggestions.forEach(sub => {
            const div = document.createElement('div');
            div.className = 'suggestion-item p-2 border-bottom';
            div.innerHTML = `
                <div><strong>${sub.name}</strong></div>
                <div class="small text-muted">${sub.mobile_number} | ${sub.location}</div>
            `;// Add click event to the suggestion
            div.addEventListener('click', () => {
                document.getElementById('subscriber-search').value = sub.name;
                suggestionsContainer.classList.add('d-none');
                // Filter to just this subscriber
                filteredSubscribers = [sub];
                renderSubscribersTable();
            });
            
            suggestionsContainer.appendChild(div);
        });
        
        suggestionsContainer.classList.remove('d-none');
    } else {
        suggestionsContainer.innerHTML = '<div class="p-2">No matches found</div>';
        suggestionsContainer.classList.remove('d-none');
    }
}

// Close suggestions when clicking outside
document.addEventListener('click', function(event) {
    const suggestionsContainer = document.getElementById('search-suggestions');
    const searchInput = document.getElementById('subscriber-search');
    
    if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
        suggestionsContainer.classList.add('d-none');
    }
});

// Apply filters
function applyFilters() {
    const planFilter = document.getElementById('plan-filter').value;
    const statusFilter = document.getElementById('status-filter').value;
    const locationFilter = document.getElementById('location-filter').value;
    const expirationFilter = document.getElementById('expiration-filter').value;
    const searchTerm = document.getElementById('subscriber-search').value.toLowerCase();
    
    // Reset selection
    selectedSubscribers.clear();
    document.getElementById('select-all-active').checked = false;
    
    // Filter subscribers based on selected criteria
    filteredSubscribers = subscribers.filter(sub => {
        const plan = plans.find(p => p.plan_id === sub.plan_id);
        const expiresInDays = getExpirationDays(sub.expires_on);
        
        // Check if subscriber matches all selected filters
        return (
            (planFilter === '' || (plan && plan.category === planFilter)) &&
            (statusFilter === '' || sub.status === statusFilter) &&
            (locationFilter === '' || sub.location === locationFilter) &&
            (expirationFilter === '' || (expiresInDays <= parseInt(expirationFilter))) &&
            (searchTerm === '' || 
                sub.name.toLowerCase().includes(searchTerm) || 
                sub.mobile_number.includes(searchTerm) || 
                sub.location.toLowerCase().includes(searchTerm) ||
                getPlanName(sub.plan_id).toLowerCase().includes(searchTerm))
        );
    });
    
    // Reset to first page
    currentPageActive = 1;
    
    // Render the filtered subscribers
    renderSubscribersTable();
    setupPagination();
    
    // Show success toast
    showToast('Filters applied successfully', 'success');
}

// Clear all filters
function clearFilters() {
    // Reset all filter fields
    document.getElementById('plan-filter').value = '';
    document.getElementById('status-filter').value = '';
    document.getElementById('location-filter').value = '';
    document.getElementById('expiration-filter').value = '';
    document.getElementById('subscriber-search').value = '';
    
    // Reset selection
    selectedSubscribers.clear();
    document.getElementById('select-all-active').checked = false;
    
    // Reset filters and render all subscribers
    filteredSubscribers = [...subscribers];
    currentPageActive = 1;
    
    renderSubscribersTable();
    setupPagination();
    
    // Show success toast
    showToast('Filters cleared successfully', 'success');
}

// Toggle blocked subscribers visibility
function toggleBlockedSubscribers(e) {
    const blockedCard = document.getElementById('blocked-subscribers-card');
    if (e.target.checked) {
        blockedCard.classList.remove('d-none');
        renderBlockedSubscribersTable();
    } else {
        blockedCard.classList.add('d-none');
    }
}

// Select all active subscribers
function selectAllActive(e) {
    const checkboxes = document.querySelectorAll('#subscribers-table-body input[type="checkbox"]');
    const isChecked = e.target.checked;
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
        const subscriberId = parseInt(checkbox.getAttribute('data-id'));
        
        if (isChecked) {
            selectedSubscribers.add(subscriberId);
        } else {
            selectedSubscribers.delete(subscriberId);
        }
    });
    
    updateBulkActionsVisibility();
}

// Select all blocked subscribers
function selectAllBlocked(e) {
    const checkboxes = document.querySelectorAll('#blocked-table-body input[type="checkbox"]');
    const isChecked = e.target.checked;
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
        const subscriberId = parseInt(checkbox.getAttribute('data-id'));
        
        if (isChecked) {
            selectedBlockedSubscribers.add(subscriberId);
        } else {
            selectedBlockedSubscribers.delete(subscriberId);
        }
    });
    
    updateBulkActionsVisibility();
}

// Toggle individual subscriber selection
function toggleSubscriberSelection(subscriberId, isBlocked = false) {
    const id = parseInt(subscriberId);
    
    if (isBlocked) {
        if (selectedBlockedSubscribers.has(id)) {
            selectedBlockedSubscribers.delete(id);
        } else {
            selectedBlockedSubscribers.add(id);
        }
    } else {
        if (selectedSubscribers.has(id)) {
            selectedSubscribers.delete(id);
        } else {
            selectedSubscribers.add(id);
        }
    }
    
    updateBulkActionsVisibility();
}

// Update bulk actions visibility
function updateBulkActionsVisibility() {
    const bulkActionsContainer = document.querySelector('.bulk-actions');
    const bulkBlockBtn = document.getElementById('bulk-block');
    const bulkUnblockBtn = document.getElementById('bulk-unblock');
    const bulkNotifyBtn = document.getElementById('bulk-notify');
    
    if (selectedSubscribers.size > 0 || selectedBlockedSubscribers.size > 0) {
        bulkActionsContainer.classList.remove('d-none');
        
        // Show/hide appropriate buttons based on selection
        bulkBlockBtn.style.display = selectedSubscribers.size > 0 ? 'inline-block' : 'none';
        bulkUnblockBtn.style.display = selectedBlockedSubscribers.size > 0 ? 'inline-block' : 'none';
        bulkNotifyBtn.style.display = selectedSubscribers.size > 0 ? 'inline-block' : 'none';
    } else {
        bulkActionsContainer.classList.add('d-none');
    }
}

// Render subscribers table
function renderSubscribersTable() {
    const tableBody = document.getElementById('subscribers-table-body');
    const startIndex = (currentPageActive - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredSubscribers.length);
    const currentPageData = filteredSubscribers.slice(startIndex, endIndex);
    
    // Clear table
    tableBody.innerHTML = '';
    
    if (currentPageData.length === 0) {
        // No data row
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="8" class="text-center">No subscribers found</td>`;
        tableBody.appendChild(tr);
        return;
    }
    
    // Create rows for current page data
    currentPageData.forEach(sub => {
        const expiresInDays = getExpirationDays(sub.expires_on);
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>
                <div class="form-check">
                    <input class="form-check-input subscriber-select" type="checkbox" data-id="${sub.subscriber_id}" ${selectedSubscribers.has(sub.subscriber_id) ? 'checked' : ''}>
                </div>
            </td>
            <td>${sub.name}</td>
            <td>${sub.mobile_number}</td>
            <td><span class="badge ${sub.status === 'Active' ? 'bg-success' : 'bg-secondary'}">${sub.status}</span></td>
            <td>${getPlanName(sub.plan_id)}</td>
            <td>${sub.location}</td>
            <td>
                <span class="${expiresInDays <= 3 ? 'text-danger' : expiresInDays <= 7 ? 'text-warning' : ''}">
                    ${expiresInDays} days
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-primary me-1 update-btn" data-id="${sub.subscriber_id}">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-sm btn-danger me-1 block-btn" data-id="${sub.subscriber_id}" data-name="${sub.name}">
                    <i class="bi bi-lock"></i>
                </button>
                <button class="btn btn-sm btn-warning notify-btn" data-id="${sub.subscriber_id}" data-name="${sub.name}" ${expiresInDays > 7 ? 'disabled' : ''}>
                    <i class="bi bi-bell"></i>
                </button>
            </td>
        `;
        
        tableBody.appendChild(tr);
    });
    
    // Add event listeners to the buttons
    addTableButtonListeners();
    
    // Add event listeners to the checkboxes
    document.querySelectorAll('.subscriber-select').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            toggleSubscriberSelection(this.getAttribute('data-id'));
        });
    });
    
    // Update counts
    updateSubscriberCounts();
}

// Render blocked subscribers table
function renderBlockedSubscribersTable() {
    const tableBody = document.getElementById('blocked-table-body');
    
    // Clear table
    tableBody.innerHTML = '';
    
    if (blockedSubscribers.length === 0) {
        // No data row
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="9" class="text-center">No blocked subscribers found</td>`;
        tableBody.appendChild(tr);
        return;
    }
    
    // Create rows for blocked subscribers
    blockedSubscribers.forEach(blockInfo => {
        // Find the subscriber in the original subscribers array
        const sub = subscribers.find(s => s.subscriber_id === blockInfo.subscriber_id) || {};
        if (!sub.subscriber_id) return;
        
        const tr = document.createElement('tr');
        const blockedDate = new Date(blockInfo.blocked_at);
        
        tr.innerHTML = `
            <td>
                <div class="form-check">
                    <input class="form-check-input blocked-select" type="checkbox" data-id="${sub.subscriber_id}" ${selectedBlockedSubscribers.has(sub.subscriber_id) ? 'checked' : ''}>
                </div>
            </td>
            <td>${sub.name}</td>
            <td>${sub.mobile_number}</td>
            <td><span class="badge bg-danger">Blocked</span></td>
            <td>${getPlanName(sub.plan_id)}</td>
            <td>${sub.location}</td>
            <td>${blockInfo.blocked_reason}</td>
            <td>${blockedDate.toLocaleDateString()}</td>
            <td>
                <button class="btn btn-sm btn-primary me-1 update-blocked-btn" data-id="${sub.subscriber_id}">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-sm btn-success unblock-btn" data-id="${sub.subscriber_id}" data-name="${sub.name}">
                    <i class="bi bi-unlock"></i>
                </button>
            </td>
        `;
        
        tableBody.appendChild(tr);
    });
    
    // Add event listeners to the buttons
    document.querySelectorAll('.update-blocked-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            openUpdateModal(this.getAttribute('data-id'));
        });
    });
    
    document.querySelectorAll('.unblock-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            openUnblockModal(this.getAttribute('data-id'), this.getAttribute('data-name'));
        });
    });
    
    // Add event listeners to the checkboxes
    document.querySelectorAll('.blocked-select').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            toggleSubscriberSelection(this.getAttribute('data-id'), true);
        });
    });
    
    // Update counts
    updateSubscriberCounts();
}

// Add event listeners to table buttons
function addTableButtonListeners() {
    document.querySelectorAll('.update-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            openUpdateModal(this.getAttribute('data-id'));
        });
    });
    
    document.querySelectorAll('.block-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            openBlockModal(this.getAttribute('data-id'), this.getAttribute('data-name'));
        });
    });
    
    document.querySelectorAll('.notify-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            openNotifyModal(this.getAttribute('data-id'), this.getAttribute('data-name'));
        });
    });
}

// Set up pagination
function setupPagination() {
    const paginationContainer = document.getElementById('pagination-active');
    const totalPages = Math.ceil(filteredSubscribers.length / itemsPerPage);
    
    paginationContainer.innerHTML = '';
    
    // Previous button
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPageActive === 1 ? 'disabled' : ''}`;
    prevLi.innerHTML = `<a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>`;
    if (currentPageActive > 1) {
        prevLi.addEventListener('click', () => {
            currentPageActive--;
            renderSubscribersTable();
            setupPagination();
        });
    }
    paginationContainer.appendChild(prevLi);
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${currentPageActive === i ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        
        li.addEventListener('click', () => {
            currentPageActive = i;
            renderSubscribersTable();
            setupPagination();
        });
        
        paginationContainer.appendChild(li);
    }
    
    // Next button
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPageActive === totalPages || totalPages === 0 ? 'disabled' : ''}`;
    nextLi.innerHTML = `<a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>`;
    if (currentPageActive < totalPages) {
        nextLi.addEventListener('click', () => {
            currentPageActive++;
            renderSubscribersTable();
            setupPagination();
        });
    }
    paginationContainer.appendChild(nextLi);
}

// Open subscriber update modal
function openUpdateModal(subscriberId) {
    const id = parseInt(subscriberId);
    const subscriber = subscribers.find(sub => sub.subscriber_id === id);
    
    if (!subscriber) return;
    
    // Populate modal form
    document.getElementById('subscriber-id').value = subscriber.subscriber_id;
    document.getElementById('subscriber-name').value = subscriber.name;
    document.getElementById('subscriber-email').value = subscriber.email;
    document.getElementById('subscriber-mobile').value = subscriber.mobile_number;
    document.getElementById('subscriber-status').value = subscriber.status;
    document.getElementById('subscriber-location').value = subscriber.location;
    document.getElementById('subscriber-plan').value = subscriber.plan_id;
    
    // Convert date format from "YYYY-MM-DD" to input date format
    const expiryDate = new Date(subscriber.expires_on);
    const formattedDate = expiryDate.toISOString().split('T')[0];
    document.getElementById('subscriber-expiry').value = formattedDate;
    
    // Show modal
    const subscriberModal = new bootstrap.Modal(document.getElementById('subscriberModal'));
    subscriberModal.show();
}

// Open block subscriber modal
function openBlockModal(subscriberId, subscriberName) {
    document.getElementById('block-subscriber-name').textContent = subscriberName;
    
    // Store subscriber ID in a data attribute on the confirm button
    document.getElementById('confirm-block').setAttribute('data-id', subscriberId);
    
    // Clear reason field
    document.getElementById('block-reason').value = '';
    
    // Show modal
    const blockModal = new bootstrap.Modal(document.getElementById('blockModal'));
    blockModal.show();
}

// Open unblock subscriber modal
function openUnblockModal(subscriberId, subscriberName) {
    document.getElementById('unblock-subscriber-name').textContent = subscriberName;
    
    // Store subscriber ID in a data attribute on the confirm button
    document.getElementById('confirm-unblock').setAttribute('data-id', subscriberId);
    
    // Show modal
    const unblockModal = new bootstrap.Modal(document.getElementById('unblockModal'));
    unblockModal.show();
}

// Open notify subscriber modal
function openNotifyModal(subscriberId, subscriberName) {
    document.getElementById('notify-subscriber-name').textContent = subscriberName;
    
    // Store subscriber ID in a data attribute on the confirm button
    document.getElementById('confirm-notify').setAttribute('data-id', subscriberId);
    
    // Show modal
    const notifyModal = new bootstrap.Modal(document.getElementById('notifyModal'));
    notifyModal.show();
}

// Save profile changes
function saveProfile() {
    const name = document.getElementById('profile-name').value;
    const email = document.getElementById('profile-email').value;
    
    // Update admin data
    admins[0].name = name;
    admins[0].email = email;
    
    // Update displayed admin name
    document.getElementById('admin-name').textContent = name;
    
    // Close modal
    const profileModal = bootstrap.Modal.getInstance(document.getElementById('profileModal'));
    profileModal.hide();
    
    // Show success toast
    showToast('Profile updated successfully', 'success');
}

// Save subscriber changes
function saveSubscriber() {
    const id = parseInt(document.getElementById('subscriber-id').value);
    const name = document.getElementById('subscriber-name').value;
    const email = document.getElementById('subscriber-email').value;
    const mobile = document.getElementById('subscriber-mobile').value;
    const status = document.getElementById('subscriber-status').value;
    const location = document.getElementById('subscriber-location').value;
    const planId = parseInt(document.getElementById('subscriber-plan').value);
    const expires = document.getElementById('subscriber-expiry').value;
    
    // Validate form
    if (!name || !email || !mobile || !status || !location || !planId || !expires) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    // Find subscriber index
    const subscriberIndex = subscribers.findIndex(sub => sub.subscriber_id === id);
    
    if (subscriberIndex !== -1) {
        // Update subscriber data
        subscribers[subscriberIndex] = {
            ...subscribers[subscriberIndex],
            name,
            email,
            mobile_number: mobile,
            status,
            location,
            plan_id: planId,
            expires_on: expires
        };
        
        // Apply filters again to update the filtered list
        applyFilters();
        
        // Update blocked subscribers table if visible
        if (!document.getElementById('blocked-subscribers-card').classList.contains('d-none')) {
            renderBlockedSubscribersTable();
        }
        
        // Close modal
        const subscriberModal = bootstrap.Modal.getInstance(document.getElementById('subscriberModal'));
        subscriberModal.hide();
        
        // Show success toast
        showToast('Subscriber updated successfully', 'success');
    }
}

// Confirm block subscriber
function confirmBlockSubscriber() {
    const subscriberId = parseInt(document.getElementById('confirm-block').getAttribute('data-id'));
    const reason = document.getElementById('block-reason').value;
    
    if (!reason) {
        showToast('Please provide a reason for blocking', 'error');
        return;
    }
    
    // Create block record
    const blockRecord = {
        block_id: blockedSubscribers.length + 1,
        subscriber_id: subscriberId,
        blocked_reason: reason,
        blocked_at: new Date().toISOString()
    };
    
    // Add to blocked subscribers
    blockedSubscribers.push(blockRecord);
    
    // Remove from filtered subscribers if present
    filteredSubscribers = filteredSubscribers.filter(sub => sub.subscriber_id !== subscriberId);
    
    // Close modal
    const blockModal = bootstrap.Modal.getInstance(document.getElementById('blockModal'));
    blockModal.hide();
    
    // Update tables
    renderSubscribersTable();
    setupPagination();
    
    if (!document.getElementById('blocked-subscribers-card').classList.contains('d-none')) {
        renderBlockedSubscribersTable();
    }
    
    // Show success toast
    showToast('Subscriber blocked successfully', 'success');
}

// Confirm unblock subscriber
function confirmUnblockSubscriber() {
    const subscriberId = parseInt(document.getElementById('confirm-unblock').getAttribute('data-id'));
    
    // Remove from blocked subscribers
    blockedSubscribers = blockedSubscribers.filter(block => block.subscriber_id !== subscriberId);
    
    // Update filtered subscribers if needed
    applyFilters();
    
    // Close modal
    const unblockModal = bootstrap.Modal.getInstance(document.getElementById('unblockModal'));
    unblockModal.hide();
    
    // Update tables
    renderBlockedSubscribersTable();
    renderSubscribersTable();
    setupPagination();
    
    // Show success toast
    showToast('Subscriber unblocked successfully', 'success');
}

// Confirm notify subscriber
function confirmNotifySubscriber() {
    const subscriberId = parseInt(document.getElementById('confirm-notify').getAttribute('data-id'));
    const message = document.getElementById('notification-message').value;
    
    if (!message) {
        showToast('Please provide a notification message', 'error');
        return;
    }
    
    // In a real application, this would send the notification to the subscriber
    console.log(`Notification sent to subscriber ${subscriberId}: ${message}`);
    
    // Close modal
    const notifyModal = bootstrap.Modal.getInstance(document.getElementById('notifyModal'));
    notifyModal.hide();
    
    // Show success toast
    showToast('Notification sent successfully', 'success');
}

// Bulk notify subscribers
function bulkNotifySubscribers() {
    if (selectedSubscribers.size === 0) {
        showToast('No subscribers selected', 'error');
        return;
    }
    
    // In a real application, this would send notifications to all selected subscribers
    console.log(`Sending notifications to ${selectedSubscribers.size} subscribers`);
    
    // Show success toast
    showToast(`Notifications sent to ${selectedSubscribers.size} subscribers`, 'success');
    
    // Clear selection
    selectedSubscribers.clear();
    document.getElementById('select-all-active').checked = false;
    renderSubscribersTable();
    updateBulkActionsVisibility();
}

// Bulk block subscribers
function bulkBlockSubscribers() {
    if (selectedSubscribers.size === 0) {
        showToast('No subscribers selected', 'error');
        return;
    }
    
    // Get block reason (in a real application, you might want to show a modal for this)
    const reason = "Bulk action: Policy violation";
    
    // Block all selected subscribers
    selectedSubscribers.forEach(subscriberId => {
        // Create block record
        const blockRecord = {
            block_id: blockedSubscribers.length + 1,
            subscriber_id: subscriberId,
            blocked_reason: reason,
            blocked_at: new Date().toISOString()
        };
        
        // Add to blocked subscribers
        blockedSubscribers.push(blockRecord);
        
        // Remove from filtered subscribers if present
        filteredSubscribers = filteredSubscribers.filter(sub => sub.subscriber_id !== subscriberId);
    });
    
    // Show success toast
    showToast(`${selectedSubscribers.size} subscribers blocked successfully`, 'success');
    
    // Clear selection
    selectedSubscribers.clear();
    document.getElementById('select-all-active').checked = false;
    
    // Update tables
    renderSubscribersTable();
    setupPagination();
    
    if (!document.getElementById('blocked-subscribers-card').classList.contains('d-none')) {
        renderBlockedSubscribersTable();
    }
    
    updateBulkActionsVisibility();
}

// Bulk unblock subscribers
function bulkUnblockSubscribers() {
    if (selectedBlockedSubscribers.size === 0) {
        showToast('No blocked subscribers selected', 'error');
        return;
    }
    
    // Unblock all selected subscribers
    selectedBlockedSubscribers.forEach(subscriberId => {
        // Remove from blocked subscribers
        blockedSubscribers = blockedSubscribers.filter(block => block.subscriber_id !== subscriberId);
    });
    
    // Show success toast
    showToast(`${selectedBlockedSubscribers.size} subscribers unblocked successfully`, 'success');
    
    // Clear selection
    selectedBlockedSubscribers.clear();
    document.getElementById('select-all-blocked').checked = false;
    
    // Update tables
    renderBlockedSubscribersTable();
    applyFilters();
    updateBulkActionsVisibility();
}

// Helper Functions

// Populate plan dropdown
function populatePlanDropdown() {
    const planSelect = document.getElementById('subscriber-plan');
    planSelect.innerHTML = '';
    
    plans.forEach(plan => {
        const option = document.createElement('option');
        option.value = plan.plan_id;
        option.textContent = `${plan.plan_name} (${plan.category})`;
        planSelect.appendChild(option);
    });
}

// Get plan name by ID
function getPlanName(planId) {
    const plan = plans.find(p => p.plan_id === planId);
    return plan ? plan.plan_name : 'No Plan';
}

// Calculate days until expiration
function getExpirationDays(expiryDate) {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
}

// Update subscriber counts
function updateSubscriberCounts() {
    document.getElementById('active-count').textContent = filteredSubscribers.length;
    document.getElementById('blocked-count').textContent = blockedSubscribers.length;
}

// Show toast notification
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    
    const toastId = `toast-${Date.now()}`;
    const toastHTML = `
        <div id="${toastId}" class="toast align-items-center border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body ${type === 'error' ? 'text-danger' : type === 'success' ? 'text-success' : ''}">
                    <i class="bi ${type === 'error' ? 'bi-exclamation-triangle' : type === 'success' ? 'bi-check-circle' : 'bi-info-circle'} me-2"></i>
                    ${message}
                </div>
                <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;
    
    toastContainer.insertAdjacentHTML('beforeend', toastHTML);
    
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement, { autohide: true, delay: 3000 });
    toast.show();
    
    // Remove toast after it's hidden
    toastElement.addEventListener('hidden.bs.toast', function() {
        this.remove();
    });
}