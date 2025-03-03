//Admin Plans Page JavaScript

// Sample Data
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

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

// Initialize all page components
function initializePage() {
    // Initialize theme
    initializeTheme();
    
    // Initialize price range slider
    initializePriceSlider();
    
    // Populate category dropdown
    populateCategoryDropdown();
    
    // Render all plans
    renderPlans();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup search functionality
    setupSearch();
}

// Initialize theme based on time of day or saved preference
function initializeTheme() {
    const autoThemeSwitch = document.getElementById('autoThemeSwitch');
    const lightModeIcon = document.getElementById('lightModeIcon');
    const darkModeIcon = document.getElementById('darkModeIcon');
    
    // Check for saved theme preference or use auto theme based on time
    const savedTheme = localStorage.getItem('theme');
    const autoMode = localStorage.getItem('autoMode') === 'true';
    
    autoThemeSwitch.checked = autoMode || autoMode === null;
    
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else if (savedTheme === 'light') {
        enableLightMode();
    } else if (autoMode || autoMode === null) {
        // Auto theme based on time (6 AM to 6 PM is light mode)
        const currentHour = new Date().getHours();
        if (currentHour >= 6 && currentHour < 18) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    }
    
    // Theme toggle event listeners
    document.querySelector('.mode-toggle').addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            enableLightMode();
            localStorage.setItem('theme', 'light');
            localStorage.setItem('autoMode', 'false');
            autoThemeSwitch.checked = false;
        } else {
            enableDarkMode();
            localStorage.setItem('theme', 'dark');
            localStorage.setItem('autoMode', 'false');
            autoThemeSwitch.checked = false;
        }
    });
    
    // Auto theme switch event listener
    autoThemeSwitch.addEventListener('change', function() {
        if (this.checked) {
            localStorage.setItem('autoMode', 'true');
            localStorage.removeItem('theme');
            
            // Set theme based on time
            const currentHour = new Date().getHours();
            if (currentHour >= 6 && currentHour < 18) {
                enableLightMode();
            } else {
                enableDarkMode();
            }
        } else {
            localStorage.setItem('autoMode', 'false');
            // Keep current theme
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        }
    });
    
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        lightModeIcon.classList.add('d-none');
        darkModeIcon.classList.remove('d-none');
    }
    
    function enableLightMode() {
        document.body.classList.remove('dark-mode');
        lightModeIcon.classList.remove('d-none');
        darkModeIcon.classList.add('d-none');
    }
}

// Initialize price range slider
function initializePriceSlider() {
    const priceSlider = document.getElementById('priceRangeSlider');
    const priceRangeValue = document.getElementById('priceRangeValue');
    
    // Find min and max prices from plans
    const prices = plans.map(plan => plan.price);
    const minPrice = Math.floor(Math.min(...prices));
    const maxPrice = Math.ceil(Math.max(...prices));
    
    // Create slider
    noUiSlider.create(priceSlider, {
        start: [minPrice, maxPrice],
        connect: true,
        step: 10,
        range: {
            'min': minPrice,
            'max': maxPrice
        },
        format: {
            to: function(value) {
                return Math.round(value);
            },
            from: function(value) {
                return Number(value);
            }
        }
    });
    
    // Update display value when slider changes
    priceSlider.noUiSlider.on('update', function(values) {
        priceRangeValue.textContent = `₹${values[0]} - ₹${values[1]}`;
    });
}

// Populate category dropdown
function populateCategoryDropdown() {
    const categoryFilter = document.getElementById('categoryFilter');
    
    // Clear existing options except first one
    while (categoryFilter.options.length > 1) {
        categoryFilter.remove(1);
    }
    
    // Create a unique set of categories from plans
    const categories = [...new Set(plans.map(plan => plan.category))];
    
    // Add options to dropdown
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Render all plans grouped by category
function renderPlans(filteredPlans = null) {
    const plansContainer = document.getElementById('plansContainer');
    plansContainer.innerHTML = '';
    
    // Use filtered plans or all plans
    const plansToRender = filteredPlans || plans;
    
    // Group plans by category
    const plansByCategory = {};
    plansToRender.forEach(plan => {
        if (!plansByCategory[plan.category]) {
            plansByCategory[plan.category] = [];
        }
        plansByCategory[plan.category].push(plan);
    });
    
    // If no plans to render
    if (Object.keys(plansByCategory).length === 0) {
        plansContainer.innerHTML = `
            <div class="alert alert-info">
                <i class="bi bi-info-circle me-2"></i>No plans match your search criteria.
            </div>
        `;
        return;
    }
    
    // Create section for each category
    Object.keys(plansByCategory).forEach(category => {
        const categoryPlans = plansByCategory[category];
        const categoryObj = planCategories.find(c => c.name === category) || { name: category, is5G: false };
        
        // Create category section
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section mb-4';
        
        // Category header
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'd-flex justify-content-between align-items-center mb-3';
        categoryHeader.innerHTML = `
            <h2 class="category-title">
                ${category} 
                ${categoryObj.is5G ? '<span class="badge bg-primary ms-2">5G</span>' : ''}
            </h2>
            <button class="btn btn-outline-primary add-plan-btn" data-category="${category}">
                <i class="bi bi-plus-circle me-1"></i> Add Plan
            </button>
        `;
        
        // Plans container
        const plansGrid = document.createElement('div');
        plansGrid.className = 'row plans-grid';
        
        // Create plan cards
        categoryPlans.forEach(plan => {
            const planCard = createPlanCard(plan);
            plansGrid.appendChild(planCard);
        });
        
        // Append to category section
        categorySection.appendChild(categoryHeader);
        categorySection.appendChild(plansGrid);
        
        // Append to main container
        plansContainer.appendChild(categorySection);
    });
    
    // Add event listeners to new elements
    setupPlanCardEventListeners();
}

// Create a plan card
function createPlanCard(plan) {
    const planCol = document.createElement('div');
    planCol.className = 'col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3';
    
    // Format OTTs for display
    const ottList = plan.OTTs ? plan.OTTs.split(', ').filter(ott => ott) : [];
    const ottBadges = ottList.map(ott => 
        `<span class="badge bg-secondary me-1">${ott}</span>`
    ).join('');
    
    // Check if category is 5G
    const category = planCategories.find(c => c.name === plan.category);
    const is5G = category && category.is5G;
    
    planCol.innerHTML = `
        <div class="card plan-card h-100" data-plan-id="${plan.plan_id}">
            <div class="card-header d-flex justify-content-between align-items-center">
                <div class="form-check">
                    <input class="form-check-input plan-select" type="checkbox" value="${plan.plan_id}">
                    <label class="plan-name">${plan.plan_name}</label>
                </div>
                ${is5G ? '<span class="badge bg-primary">5G</span>' : ''}
            </div>
            <div class="card-body">
                <div class="plan-price mb-3">₹${plan.price.toFixed(2)}</div>
                <div class="plan-details">
                    <div class="detail-item">
                        <i class="bi bi-calendar-check me-2"></i>
                        <span>${plan.validity} days</span>
                    </div>
                    <div class="detail-item">
                        <i class="bi bi-speedometer2 me-2"></i>
                        <span>${plan.data_per_day}/day</span>
                    </div>
                    ${plan.voice_calls ? `
                    <div class="detail-item">
                        <i class="bi bi-telephone me-2"></i>
                        <span>${plan.voice_calls}</span>
                    </div>
                    ` : ''}
                    ${plan.messages ? `
                    <div class="detail-item">
                        <i class="bi bi-chat me-2"></i>
                        <span>${plan.messages}</span>
                    </div>
                    ` : ''}
                    ${ottList.length > 0 ? `
                    <div class="detail-item">
                        <i class="bi bi-tv me-2"></i>
                        <div class="ott-badges">${ottBadges}</div>
                    </div>
                    ` : ''}
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-outline-primary me-1 edit-plan-btn" data-plan-id="${plan.plan_id}">
                    <i class="bi bi-pencil"></i> Update
                </button>
                <button class="btn btn-sm btn-outline-danger delete-plan-btn" data-plan-id="${plan.plan_id}">
                    <i class="bi bi-trash"></i> Delete
                </button>
            </div>
        </div>
    `;
    
    return planCol;
}

// Setup event listeners for all interactive elements
function setupEventListeners() {
    // Apply filters button
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    
     // Add category button trigger
     document.getElementById('addCategoryBtn').addEventListener('click', openAddCategoryModal);

     // Save category button
    document.getElementById('saveCategoryBtn').addEventListener('click', saveCategory);

    // Clear filters button
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
    
    
    // Add plan button (inside category)
    document.addEventListener('click', function(event) {
        if (event.target.closest('.add-plan-btn')) {
            const category = event.target.closest('.add-plan-btn').dataset.category;
            openAddPlanModal(category);
        }
    });

       // Toggle OTT options in category modal
       document.getElementById('initialOTTsEnabled').addEventListener('change', function() {
        document.querySelector('.initial-ott-options').classList.toggle('d-none', !this.checked);
    });
    
        // Add plan button (inside category)
        document.addEventListener('click', function(event) {
            if (event.target.closest('.add-plan-btn')) {
                const category = event.target.closest('.add-plan-btn').dataset.category;
                openAddPlanModal(category);
            }
        });

    // Save plan button
    document.getElementById('savePlanBtn').addEventListener('click', savePlan);
    
    // Delete confirmation button
    document.getElementById('confirmDeleteBtn').addEventListener('click', confirmDelete);
    
    document.getElementById('initialOTTsEnabled').addEventListener('change', function() {
        document.querySelector('.initial-ott-options').classList.toggle('d-none', !this.checked);
    });
    
    
    // Bulk delete button
    document.getElementById('bulkDeleteBtn').addEventListener('click', function() {
        const selectedPlans = getSelectedPlans();
        if (selectedPlans.length > 0) {
            openDeleteConfirmModal('bulk', selectedPlans);
        }
    });
    
    // Check all checkboxes change
    document.addEventListener('change', function(event) {
        if (event.target.classList.contains('plan-select')) {
            updateBulkDeleteButton();
        }
    });
}

// Setup event listeners specifically for plan cards (after rendering)
function setupPlanCardEventListeners() {
    // Edit plan buttons
    document.querySelectorAll('.edit-plan-btn').forEach(button => {
        button.addEventListener('click', function() {
            const planId = parseInt(this.dataset.planId);
            openEditPlanModal(planId);
        });
    });
    
    // Delete plan buttons
    document.querySelectorAll('.delete-plan-btn').forEach(button => {
        button.addEventListener('click', function() {
            const planId = parseInt(this.dataset.planId);
            openDeleteConfirmModal('single', planId);
        });
    });
}

// Apply filters to plans
function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const dataPerDay = document.getElementById('dataFilter').value;
    const validity = document.getElementById('validityFilter').value;
    const priceRange = document.getElementById('priceRangeSlider').noUiSlider.get();
    const searchTerm = document.getElementById('planSearch').value.toLowerCase();
    
    // Filter plans based on all criteria
    const filteredPlans = plans.filter(plan => {
        // Category filter
        if (category && plan.category !== category) return false;
        
        // Data per day filter
        if (dataPerDay && plan.data_per_day !== dataPerDay) return false;
        
        // Validity filter
        if (validity && plan.validity !== parseInt(validity)) return false;
        
        // Price range filter
        if (plan.price < priceRange[0] || plan.price > priceRange[1]) return false;
        
        // Search term filter
        if (searchTerm) {
            const planValues = Object.values(plan).map(val => 
                val ? val.toString().toLowerCase() : ''
            ).join(' ');
            if (!planValues.includes(searchTerm)) return false;
        }
        
        return true;
    });
    
    // Render filtered plans
    renderPlans(filteredPlans);
    
    // Show toast
    showToast(`Found ${filteredPlans.length} plans matching your criteria.`);
}

// Clear all filters
function clearFilters() {
    document.getElementById('categoryFilter').value = '';
    document.getElementById('dataFilter').value = '';
    document.getElementById('validityFilter').value = '';
    document.getElementById('planSearch').value = '';
    
    // Reset price slider to min/max values
    const prices = plans.map(plan => plan.price);
    const minPrice = Math.floor(Math.min(...prices));
    const maxPrice = Math.ceil(Math.max(...prices));
    document.getElementById('priceRangeSlider').noUiSlider.set([minPrice, maxPrice]);
    
    // Render all plans
    renderPlans();
    
    // Clear search suggestions
    document.getElementById('searchSuggestions').classList.add('d-none');
}

// Save new category
function saveCategory() {
    const categoryName = document.getElementById('categoryName').value.trim();
    if (!categoryName) {
        showToast('Category name is required.', 'error');
        return;
    }
    
    // Check if category already exists
    if (planCategories.some(cat => cat.name.toLowerCase() === categoryName.toLowerCase())) {
        showToast('Category already exists.', 'error');
        return;
    }
    
    // Get 5G status
    const is5G = document.getElementById('is5GCategory').checked;
    
    // Validate initial plan data
    const planName = document.getElementById('initialPlanName').value.trim();
    const planPrice = parseFloat(document.getElementById('initialPlanPrice').value);
    const planValidity = parseInt(document.getElementById('initialPlanValidity').value);
    
    if (!planName || isNaN(planPrice) || isNaN(planValidity)) {
        showToast('Please fill in all required initial plan fields.', 'error');
        return;
    }
    
    // Get optional plan fields
    const dataPerDay = document.getElementById('initialDataPerDay').value;
    const voiceCalls = document.getElementById('initialVoiceCalls').value;
    const messages = document.getElementById('initialMessages').value;
    
    // OTT platforms
    let otts = '';
    if (document.getElementById('initialOTTsEnabled').checked) {
        const selectedOtts = Array.from(document.querySelectorAll('.initial-ott-checkbox:checked'))
            .map(checkbox => checkbox.value);
        otts = selectedOtts.join(', ');
    }
    
    // Add new category
    planCategories.push({
        name: categoryName,
        is5G: is5G
    });

    // Create new plan for this category
    const newPlanId = plans.length > 0 ? Math.max(...plans.map(p => p.plan_id)) + 1 : 1;
    const newPlan = {
        plan_id: newPlanId,
        category: categoryName,
        plan_name: planName,
        price: planPrice,
        validity: planValidity,
        data_per_day: dataPerDay || '',
        voice_calls: voiceCalls || '',
        messages: messages || '',
        OTTs: otts,
        created_at: new Date().toISOString()
    };
    
    // Add plan to plans array
    plans.push(newPlan);
    
    // Update dropdown
    populateCategoryDropdown();
    
    // Close modal using Bootstrap's built-in function
    // const modalElement = document.getElementById('addCategoryModal');
    // const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    // modalInstance.hide();

    closeAddCategoryModal();

    // Reset form fields
    document.getElementById('categoryForm').reset();
    
    // Show toast
    showToast(`Category "${categoryName}" added successfully with initial plan.`, 'success');

    // Re-render plans to show new category
    renderPlans();
}


// Open add plan modal
function openAddPlanModal(category) {
    // Set modal title
    document.getElementById('addPlanModalLabel').textContent = `Add New Plan to ${category}`;
    
    // Reset form
    document.getElementById('planForm').reset();
    
    // Set category
    document.getElementById('planCategory').value = category;
    document.getElementById('planId').value = '';
    
    // Find category settings
    const categoryObj = planCategories.find(c => c.name === category);
    
    // Show/hide fields based on category settings
    const categoryFields = getCategoryFields(category);
    
    document.querySelector('.plan-data-field').classList.toggle('d-none', !categoryFields.includes('data_per_day'));
    document.querySelector('.plan-voice-field').classList.toggle('d-none', !categoryFields.includes('voice_calls'));
    document.querySelector('.plan-messages-field').classList.toggle('d-none', !categoryFields.includes('messages'));
    document.querySelector('.plan-ott-field').classList.toggle('d-none', !categoryFields.includes('OTTs'));
    
    // Open modal
    const modal = new bootstrap.Modal(document.getElementById('addPlanModal'));
    modal.show();
}

// Open edit plan modal
function openEditPlanModal(planId) {
    // Find plan
    const plan = plans.find(p => p.plan_id === planId);
    if (!plan) return;
    
    // Set modal title
    document.getElementById('addPlanModalLabel').textContent = `Update Plan: ${plan.plan_name}`;
    
    // Fill form with plan data
    document.getElementById('planId').value = plan.plan_id;
    document.getElementById('planCategory').value = plan.category;
    document.getElementById('planName').value = plan.plan_name;
    document.getElementById('planPrice').value = plan.price;
    document.getElementById('planValidity').value = plan.validity;
    
    // Optional fields
    if (plan.data_per_day) {
        const dataSelect = document.getElementById('planDataPerDay');
        if (Array.from(dataSelect.options).some(opt => opt.value === plan.data_per_day)) {
            dataSelect.value = plan.data_per_day;
        }
    }
    
    if (plan.voice_calls) {
        const voiceSelect = document.getElementById('planVoiceCalls');
        if (Array.from(voiceSelect.options).some(opt => opt.value === plan.voice_calls)) {
            voiceSelect.value = plan.voice_calls;
        }
    }
    
    if (plan.messages) {
        const messagesSelect = document.getElementById('planMessages');
        if (Array.from(messagesSelect.options).some(opt => opt.value === plan.messages)) {
            messagesSelect.value = plan.messages;
        }
    }
    
    // OTT checkboxes
    document.querySelectorAll('.plan-ott-checkbox').forEach(checkbox => {
        checkbox.checked = plan.OTTs && plan.OTTs.includes(checkbox.value);
    });
    
    // Show/hide fields based on category settings
    const categoryFields = getCategoryFields(plan.category);
    
    document.querySelector('.plan-data-field').classList.toggle('d-none', !categoryFields.includes('data_per_day'));
    document.querySelector('.plan-voice-field').classList.toggle('d-none', !categoryFields.includes('voice_calls'));
    document.querySelector('.plan-messages-field').classList.toggle('d-none', !categoryFields.includes('messages'));
    document.querySelector('.plan-ott-field').classList.toggle('d-none', !categoryFields.includes('OTTs'));
    
    // Open modal
    const modal = new bootstrap.Modal(document.getElementById('addPlanModal'));
    modal.show();
}

// Get fields for a category
function getCategoryFields(categoryName) {
    // Default fields for all plans
    const fields = ['plan_name', 'price', 'validity'];
    
    // Add fields based on category
    // This would normally come from database, but for demo we'll use these defaults
    fields.push('data_per_day');
    
    // Add voice_calls for all except Data Add-on
    if (categoryName !== 'Data Add-on') {
        fields.push('voice_calls');
        fields.push('messages');
    }
    
    // Add OTTs only for Premium
    if (categoryName === 'Premium') {
        fields.push('OTTs');
    }
    
    return fields;
}



// Save new plan
function savePlan() {
    const planName = document.getElementById('planName').value.trim();
    const planPrice = parseFloat(document.getElementById('planPrice').value);
    const planValidity = parseInt(document.getElementById('planValidity').value);
    const category = document.getElementById('planCategory').value;

    if (!planName || isNaN(planPrice) || isNaN(planValidity) || !category) {
        showToast('Please fill in all required fields.', 'error');
        return;
    }

    // Check if the plan already exists in the selected category
    if (plans.some(plan => plan.plan_name.toLowerCase() === planName.toLowerCase() && plan.category === category)) {
        showToast('A plan with this name already exists in the selected category.', 'error');
        return;
    }

    // Get optional fields
    const dataPerDay = document.getElementById('planDataPerDay').value || '';
    const voiceCalls = document.getElementById('planVoiceCalls').value || '';
    const messages = document.getElementById('planMessages').value || '';

// Get OTT platforms (if selected)
let otts = '';
if (document.querySelector('.initial-ott-checkbox:checked')) {
    const selectedOtts = Array.from(document.querySelectorAll('.initial-ott-checkbox:checked'))
        .map(checkbox => checkbox.value);
    otts = selectedOtts.join(', ');
}


    // Create new plan object
    const newPlanId = plans.length > 0 ? Math.max(...plans.map(p => p.plan_id)) + 1 : 1;
    const newPlan = {
        plan_id: newPlanId,
        category: category,
        plan_name: planName,
        price: planPrice,
        validity: planValidity,
        data_per_day: dataPerDay,
        voice_calls: voiceCalls,
        messages: messages,
        OTTs: otts,
        created_at: new Date().toISOString()
    };

    // Add the new plan to the array
    plans.push(newPlan);

    // // Close the modal using Bootstrap
    // const modalElement = document.getElementById('addPlanModal');
    // const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    // modalInstance.hide();

    // Reset the form
    document.getElementById('planForm').reset();

    // Show success toast
    showToast(`Plan "${planName}" added successfully to category "${category}".`, 'success');

    // Re-render plan list
    renderPlans();
}



// Open delete confirmation modal
function openDeleteConfirmModal(type, planIds) {
    const modal = document.getElementById('deleteConfirmModal');
    const confirmText = document.getElementById('deleteConfirmText');
    
    if (type === 'single') {
        const plan = plans.find(p => p.plan_id === planIds);
        confirmText.textContent = `Are you sure you want to delete the plan "${plan.plan_name}"?`;
        modal.dataset.planIds = JSON.stringify([planIds]);
    } else {
        // Bulk delete
        confirmText.textContent = `Are you sure you want to delete ${planIds.length} selected plans?`;
        modal.dataset.planIds = JSON.stringify(planIds);
    }
    
    // Show modal
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

// Confirm delete plans
function confirmDelete() {
    const modal = document.getElementById('deleteConfirmModal');
    const planIds = JSON.parse(modal.dataset.planIds);
    
    // Delete plans
    plans = plans.filter(plan => !planIds.includes(plan.plan_id));
    
    // Close modal
    const bsModal = bootstrap.Modal.getInstance(modal);
    bsModal.hide();
    
    // Re-render plans
    renderPlans();
    
    // Reset bulk delete button
    updateBulkDeleteButton();
    
    // Show toast
    const message = planIds.length > 1 ? 
        `${planIds.length} plans deleted successfully.` : 
        `Plan deleted successfully.`;
    
    showToast(message, 'success');
}

// Get selected plans
function getSelectedPlans() {
    return Array.from(document.querySelectorAll('.plan-select:checked'))
        .map(checkbox => parseInt(checkbox.value));
}

// Update bulk delete button visibility
function updateBulkDeleteButton() {
    const selectedPlans = getSelectedPlans();
    const bulkDeleteBtn = document.getElementById('bulkDeleteBtn');
    
    if (selectedPlans.length > 0) {
        bulkDeleteBtn.classList.remove('d-none');
        bulkDeleteBtn.textContent = `Delete Selected (${selectedPlans.length})`;
    } else {
        bulkDeleteBtn.classList.add('d-none');
    }
}



// Toast notification system
function showToast(message, type = 'info') {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toastId = 'toast-' + Date.now();
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'text-white bg-danger' : type === 'success' ? 'text-white bg-success' : 'bg-light'}`;
    toast.id = toastId;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    
    // Toast content
    const iconClass = type === 'error' ? 'bi-exclamation-circle' : 
                     type === 'success' ? 'bi-check-circle' : 'bi-info-circle';
    
    toast.innerHTML = `
        <div class="toast-header">
            <i class="bi ${iconClass} me-2"></i>
            <strong class="me-auto">${type.charAt(0).toUpperCase() + type.slice(1)}</strong>
            <small>Now</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;
    
    // Add to container
    toastContainer.appendChild(toast);
    
    // Initialize and show toast
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    // Remove toast after it's hidden
    toast.addEventListener('hidden.bs.toast', function() {
        this.remove();
    });
}

// Complete search functionality
function setupSearch() {
    const searchInput = document.getElementById('planSearch');
    const suggestionsBox = document.getElementById('searchSuggestions');
    
    // Input event for search box
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length < 2) {
            suggestionsBox.classList.add('d-none');
            return;
        }
        
        // Find matching plans
        const suggestions = getSuggestions(query);
        
        if (suggestions.length > 0) {
            // Display suggestions
            suggestionsBox.innerHTML = '';
            suggestionsBox.classList.remove('d-none');
            
            suggestions.forEach(suggestion => {
                const item = document.createElement('div');
                item.className = 'suggestion-item p-2';
                item.textContent = suggestion;
                item.addEventListener('click', function() {
                    searchInput.value = suggestion;
                    suggestionsBox.classList.add('d-none');
                    applyFilters();
                });
                suggestionsBox.appendChild(item);
            });
        } else {
            suggestionsBox.classList.add('d-none');
        }
    });
    
    // Close suggestions on document click
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#planSearch') && !event.target.closest('#searchSuggestions')) {
            suggestionsBox.classList.add('d-none');
        }
    });
    
    // Enter key to apply filter
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            applyFilters();
            suggestionsBox.classList.add('d-none');
        }
    });
}

// Get search suggestions based on query
function getSuggestions(query) {
    const suggestions = new Set();
    
    // Add plan names
    plans.forEach(plan => {
        // Check plan name
        if (plan.plan_name.toLowerCase().includes(query)) {
            suggestions.add(plan.plan_name);
        }
        
        // Check category
        if (plan.category.toLowerCase().includes(query)) {
            suggestions.add(plan.category);
        }
        
        // Check data
        if (plan.data_per_day.toLowerCase().includes(query)) {
            suggestions.add(plan.data_per_day);
        }
        
        // Check OTTs
        if (plan.OTTs && plan.OTTs.toLowerCase().includes(query)) {
            const otts = plan.OTTs.split(', ');
            otts.forEach(ott => {
                if (ott.toLowerCase().includes(query)) {
                    suggestions.add(ott);
                }
            });
        }
        
        // Check price
        if (plan.price.toString().includes(query)) {
            suggestions.add(`₹${plan.price}`);
        }
        
        // Check validity
        if (plan.validity.toString().includes(query)) {
            suggestions.add(`${plan.validity} days`);
        }
    });
    
    // Convert to array and limit
    return Array.from(suggestions).slice(0, 5);
}

// Initialize admin profile
function initializeAdminProfile() {
    // Set admin name from localStorage or use default
    const adminName = localStorage.getItem('adminName') || 'Admin User';
    document.getElementById('adminName').value = adminName;
    document.getElementById('adminEmail').value = localStorage.getItem('adminEmail') || 'admin@mobicomm.com';
    
    // Update welcome message
    //document.getElementById('welcomeMessage').textContent = `Welcome ${adminName}!`;
    
    // Save profile button event
    document.querySelector('#profileModal .btn-primary').addEventListener('click', function() {
        const name = document.getElementById('adminName').value.trim();
        const email = document.getElementById('adminEmail').value.trim();
        
        if (name && email) {
            localStorage.setItem('adminName', name);
            localStorage.setItem('adminEmail', email);
            
            // Update welcome message
            document.getElementById('welcomeMessage').textContent = `Welcome ${name}!`;
            
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('profileModal'));
            modal.hide();
            
            // Show success toast
            showToast('Profile updated successfully', 'success');
        } else {
            showToast('Please fill in all required fields', 'error');
        }
    });
}

// // Setup notification system
// function setupNotifications() {
//     const notificationBadge = document.getElementById('notificationBadge');
//     const notificationDropdown = document.getElementById('notificationDropdown');
    
//     // Sample notifications (in a real app, these would come from a server)
//     const notifications = [
//         { id: 1, message: 'New subscriber registered', read: false, time: '10 mins ago' },
//         { id: 2, message: 'System update scheduled for tonight', read: false, time: '1 hour ago' },
//         { id: 3, message: 'Weekly report available', read: true, time: '1 day ago' }
//     ];
    
//     // Update badge count
//     const unreadCount = notifications.filter(n => !n.read).length;
//     notificationBadge.textContent = unreadCount;
//     notificationBadge.classList.toggle('d-none', unreadCount === 0);
    
//     // Populate dropdown
//     notificationDropdown.innerHTML = '';
    
//     if (notifications.length === 0) {
//         const item = document.createElement('div');
//         item.className = 'dropdown-item text-center';
//         item.textContent = 'No notifications';
//         notificationDropdown.appendChild(item);
//     } else {
//         notifications.forEach(notification => {
//             const item = document.createElement('div');
//             item.className = `dropdown-item ${notification.read ? 'text-muted' : 'fw-bold'}`;
//             item.innerHTML = `
//                 <div class="d-flex justify-content-between">
//                     <span>${notification.message}</span>
//                     <small>${notification.time}</small>
//                 </div>
//             `;
            
//             // Mark as read on click
//             item.addEventListener('click', function() {
//                 if (!notification.read) {
//                     notification.read = true;
//                     item.classList.remove('fw-bold');
//                     item.classList.add('text-muted');
                    
//                     // Update badge
//                     const newUnreadCount = notifications.filter(n => !n.read).length;
//                     notificationBadge.textContent = newUnreadCount;
//                     notificationBadge.classList.toggle('d-none', newUnreadCount === 0);
//                 }
//             });
            
//             notificationDropdown.appendChild(item);
//         });
        
//         // Add mark all as read button
//         const markAllBtn = document.createElement('div');
//         markAllBtn.className = 'dropdown-item text-center text-primary';
//         markAllBtn.textContent = 'Mark all as read';
//         markAllBtn.addEventListener('click', function() {
//             notifications.forEach(n => n.read = true);
            
//             // Update UI
//             document.querySelectorAll('#notificationDropdown .dropdown-item').forEach(item => {
//                 if (!item.classList.contains('text-center')) {
//                     item.classList.remove('fw-bold');
//                     item.classList.add('text-muted');
//                 }
//             });
            
//             // Update badge
//             notificationBadge.textContent = 0;
//             notificationBadge.classList.add('d-none');
//         });
        
//         notificationDropdown.appendChild(markAllBtn);
//     }
// }

// Initialize sidebar navigation
function initializeSidebar() {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            sidebarItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // In a real app, you would navigate to the clicked page
            // For demo purposes, just show a toast
            if (!this.classList.contains('no-navigate')) {
                const pageName = this.querySelector('.sidebar-text').textContent;
                if (pageName !== 'Plans') {
                    showToast(`Navigation to ${pageName} page not implemented in this demo`, 'info');
                }
            }
        });
    });
}

// Complete the missing functionality for the page initialization
document.addEventListener('DOMContentLoaded', function() {
    // Add this to the existing initializePage() function or call separately
    initializeAdminProfile();
    //setupNotifications();
    initializeSidebar();
});

// Open add category modal
function openAddCategoryModal() {

    showModal('addCategoryModal');
    // // Reset form
    // document.getElementById('categoryForm').reset();
    
    // // Show the plan fields section
    // document.getElementById('initialPlanSection').classList.remove('d-none');
    
    // // Open modal
    // const modal = new bootstrap.Modal(document.getElementById('addCategoryModal'));
    // modal.show();
}


function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none'; // Hide the modal
    }

    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
        backdrop.remove(); // Remove the backdrop element from the DOM
    }

    //Re-enable scrolling on the body
    document.body.style.overflow = 'auto';
}
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block'; // Show the modal
    }

    //Disable scrolling on the body
    document.body.style.overflow = 'hidden';

    //Create a backdrop element
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    document.body.appendChild(backdrop);
}


function closeAddCategoryModal() {
    closeModal('addCategoryModal');
}



function closeAddPlanModal() {
    closeModal('addPlanModal');
    currentCategory = null; // Reset currentCategory
}

saveCategory