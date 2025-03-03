// Admin Reports Page JavaScript

// Sample Data - Admin information
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

// Generate sample transactions based on subscribers and plans
let transactions = [];
subscribers.forEach(sub => {
    // Generate 1-3 transactions per subscriber
    const numTransactions = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < numTransactions; i++) {
        const plan = plans.find(p => p.plan_id === sub.plan_id);
        const transactionDate = new Date(sub.created_at);
        transactionDate.setDate(transactionDate.getDate() + (i * 30)); // Add 30 days per transaction
        
        transactions.push({
            transaction_id: `TRX${sub.subscriber_id}${i + 1}`,
            subscriber_id: sub.subscriber_id,
            plan_id: sub.plan_id,
            amount: plan.price,
            payment_method: ['Credit Card', 'UPI', 'Debit Card', 'Net Banking'][Math.floor(Math.random() * 4)],
            status: Math.random() > 0.1 ? 'Success' : 'Failed', // 90% success rate
            transaction_date: transactionDate.toISOString(),
            payment_gateway: ['PayU', 'Razorpay', 'Stripe'][Math.floor(Math.random() * 3)]
        });
    }
});

// Generate sample recharge data
let recharges = [];
transactions.forEach(tx => {
    if (tx.status === 'Success') {
        const plan = plans.find(p => p.plan_id === tx.plan_id);
        const rechargeDate = new Date(tx.transaction_date);
        const expiryDate = new Date(rechargeDate);
        expiryDate.setDate(expiryDate.getDate() + plan.validity);
        
        recharges.push({
            recharge_id: `RCH${tx.transaction_id}`,
            transaction_id: tx.transaction_id,
            subscriber_id: tx.subscriber_id,
            plan_id: tx.plan_id,
            recharge_date: rechargeDate.toISOString(),
            expiry_date: expiryDate.toISOString(),
            status: 'Active'
        });
    }
});

// Variables for pagination
let currentPage = 1;
const pageSize = 10;
let currentReportData = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Set admin name
    //document.getElementById('adminName').textContent = admins[0].name;
    initializeTheme();

    // Initialize filters
    initializeFilters();
    
    // Add event listeners
    addEventListeners();
    
    // Set dark mode based on time of day
    //setDarkModeByTime();
});



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

// Initialize filters and dropdowns
function initializeFilters() {
    // Initialize subscriber dropdown
    const multiSubscriberSelect = document.getElementById('multiSubscriberSelect');
    subscribers.forEach(sub => {
        const option = document.createElement('option');
        option.value = sub.subscriber_id;
        option.textContent = `${sub.name} (${sub.mobile_number})`;
        multiSubscriberSelect.appendChild(option);
    });
    
    // Initialize plan dropdown
    const multiPlanSelect = document.getElementById('multiPlanSelect');
    plans.forEach(plan => {
        const option = document.createElement('option');
        option.value = plan.plan_id;
        option.textContent = `${plan.plan_name} (₹${plan.price})`;
        multiPlanSelect.appendChild(option);
    });
}

// Add event listeners
function addEventListeners() {
    // Report type selection
    document.querySelectorAll('input[name="reportType"]').forEach(radio => {
        radio.addEventListener('change', updateFilterVisibility);
    });
    
    // Subscriber selection
    document.getElementById('subscriberSelection').addEventListener('change', function() {
        const selectedValue = this.value;
        document.querySelector('.individual-subscriber').classList.toggle('d-none', selectedValue !== 'individual');
        document.querySelector('.selected-subscribers').classList.toggle('d-none', selectedValue !== 'selected');
    });
    
    // Plan selection
    document.getElementById('planSelection').addEventListener('change', function() {
        const selectedValue = this.value;
        document.querySelector('.individual-plan').classList.toggle('d-none', selectedValue !== 'individual');
        document.querySelector('.selected-plans').classList.toggle('d-none', selectedValue !== 'selected');
    });
    
    // Subscriber search
    document.getElementById('subscriberSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const resultsDiv = document.getElementById('subscriberSearchResults');
        
        if (searchTerm.length < 2) {
            resultsDiv.innerHTML = '';
            return;
        }
        
        const filteredSubscribers = subscribers.filter(sub => 
            sub.name.toLowerCase().includes(searchTerm) || 
            sub.mobile_number.includes(searchTerm)
        );
        
        displaySearchResults(filteredSubscribers, resultsDiv, 'subscriber');
    });
    
    // Plan search
    document.getElementById('planSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const resultsDiv = document.getElementById('planSearchResults');
        
        if (searchTerm.length < 2) {
            resultsDiv.innerHTML = '';
            return;
        }
        
        const filteredPlans = plans.filter(plan => 
            plan.plan_name.toLowerCase().includes(searchTerm) || 
            plan.category.toLowerCase().includes(searchTerm)
        );
        
        displaySearchResults(filteredPlans, resultsDiv, 'plan');
    });
    
    // Generate report button
    document.getElementById('generateReport').addEventListener('click', generateReport);
    
    // Download CSV button
    document.getElementById('downloadCSV').addEventListener('click', downloadCSV);
    
    // Print report button
    document.getElementById('printReport').addEventListener('click', printReport);
    
    // Pagination
    document.getElementById('prevPage').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayReportData();
        }
    });
    
    document.getElementById('nextPage').addEventListener('click', function(e) {
        e.preventDefault();
        const totalPages = Math.ceil(currentReportData.length / pageSize);
        if (currentPage < totalPages) {
            currentPage++;
            displayReportData();
        }
    });
    
//     // Theme toggle
//     document.getElementById('themeToggle').addEventListener('change', function() {
//         if (this.checked) {
//             document.body.classList.add('dark-mode');
//             document.querySelector('label[for="themeToggle"]').innerHTML = '<i class="bi bi-sun"></i> Light Mode';
//         } else {
//             document.body.classList.remove('dark-mode');
//             document.querySelector('label[for="themeToggle"]').innerHTML = '<i class="bi bi-moon"></i> Dark Mode';
//         }
//     });
 }

// Update filter visibility based on report type
function updateFilterVisibility() {
    const reportType = document.querySelector('input[name="reportType"]:checked').value;
    
    // Show/hide subscriber filter
    document.querySelector('.subscriber-filter').classList.toggle('d-none', 
        reportType === 'plan' || reportType === 'transaction');
    
    // Show/hide plan filter
    document.querySelector('.plan-filter').classList.toggle('d-none', 
        reportType === 'subscriber');
}

// Display search results
function displaySearchResults(items, resultsDiv, type) {
    resultsDiv.innerHTML = '';
    
    if (items.length === 0) {
        resultsDiv.innerHTML = '<div class="p-2">No results found</div>';
        return;
    }
    
    items.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item p-2 border-bottom';
        
        if (type === 'subscriber') {
            resultItem.textContent = `${item.name} (${item.mobile_number})`;
            resultItem.dataset.id = item.subscriber_id;
        } else {
            resultItem.textContent = `${item.plan_name} - ₹${item.price}`;
            resultItem.dataset.id = item.plan_id;
        }
        
        resultItem.addEventListener('click', function() {
            if (type === 'subscriber') {
                document.getElementById('subscriberSearch').value = item.name;
            } else {
                document.getElementById('planSearch').value = item.plan_name;
            }
            resultsDiv.innerHTML = '';
        });
        
        resultsDiv.appendChild(resultItem);
    });
}

// Generate report
function generateReport() {
    // Show loading indicator
    document.getElementById('reportSection').classList.remove('d-none');
    document.getElementById('reportLoading').classList.remove('d-none');
    document.getElementById('reportData').classList.add('d-none');
    document.getElementById('reportPagination').classList.add('d-none');
    
    // Simulate API call delay
    setTimeout(() => {
        const reportType = document.querySelector('input[name="reportType"]:checked').value;
        const timePeriod = parseInt(document.getElementById('timePeriod').value);
        
        // Set report title
        let reportTitle = '';
        switch (reportType) {
            case 'subscriber':
                reportTitle = 'Subscriber Report';
                break;
            case 'plan':
                reportTitle = 'Plan Information Report';
                break;
            case 'recharge':
                reportTitle = 'Recharge Report';
                break;
            case 'transaction':
                reportTitle = 'Transaction Report';
                break;
        }
        
        document.getElementById('reportTitle').textContent = reportTitle;
        
        // Get filtered data based on report type
        const filteredData = getFilteredData(reportType, timePeriod);
        currentReportData = filteredData;
        
        // Display report data
        displayReportData();
        
        // Show success toast
        showToast('Report Generated', 'Report has been generated successfully');
        
    }, 1500); // Simulate loading time
}

// Get filtered data based on report type and filters
function getFilteredData(reportType, timePeriod) {
    // Calculate date range
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - timePeriod);
    
    // Apply filters based on report type
    let filteredData = [];
    
    switch (reportType) {
        case 'subscriber':
            filteredData = filterSubscribers(startDate, endDate);
            break;
        case 'plan':
            filteredData = filterPlans();
            break;
        case 'recharge':
            filteredData = filterRecharges(startDate, endDate);
            break;
        case 'transaction':
            filteredData = filterTransactions(startDate, endDate);
            break;
    }
    
    return filteredData;
}

// Filter subscribers based on selection and date range
function filterSubscribers(startDate, endDate) {
    const selection = document.getElementById('subscriberSelection').value;
    let filteredSubscribers = [];
    
    if (selection === 'all') {
        filteredSubscribers = [...subscribers];
    } else if (selection === 'individual') {
        const searchValue = document.getElementById('subscriberSearch').value;
        filteredSubscribers = subscribers.filter(sub => 
            sub.name.includes(searchValue) || 
            sub.mobile_number.includes(searchValue)
        );
    } else if (selection === 'selected') {
        const selectedSubscriberIds = Array.from(
            document.getElementById('multiSubscriberSelect').selectedOptions
        ).map(option => parseInt(option.value));
        
        filteredSubscribers = subscribers.filter(sub => 
            selectedSubscriberIds.includes(sub.subscriber_id)
        );
    }
    
    // Filter by date range
    return filteredSubscribers.filter(sub => {
        const createdDate = new Date(sub.created_at);
        return createdDate >= startDate && createdDate <= endDate;
    });
}

// Filter plans based on selection
function filterPlans() {
    const selection = document.getElementById('planSelection').value;
    let filteredPlans = [];
    
    if (selection === 'all') {
        filteredPlans = [...plans];
    } else if (selection === 'individual') {
        const searchValue = document.getElementById('planSearch').value;
        filteredPlans = plans.filter(plan => 
            plan.plan_name.includes(searchValue) || 
            plan.category.includes(searchValue)
        );
    } else if (selection === 'selected') {
        const selectedPlanIds = Array.from(
            document.getElementById('multiPlanSelect').selectedOptions
        ).map(option => parseInt(option.value));
        
        filteredPlans = plans.filter(plan => 
            selectedPlanIds.includes(plan.plan_id)
        );
    }
    
    // Enhance plan data with subscriber count
    return filteredPlans.map(plan => {
        const planSubscribers = subscribers.filter(sub => sub.plan_id === plan.plan_id);
        const is5G = planCategories.find(cat => cat.name === plan.category)?.is5G || false;
        
        return {
            ...plan,
            subscriber_count: planSubscribers.length,
            revenue: planSubscribers.length * plan.price,
            is5G: is5G
        };
    });
}

// Filter recharges based on date range
function filterRecharges(startDate, endDate) {
    // Filter by plan if plan filter is selected
    const planSelection = document.getElementById('planSelection').value;
    let filteredRecharges = [...recharges];
    
    if (planSelection !== 'all') {
        let planIds = [];
        
        if (planSelection === 'individual') {
            const searchValue = document.getElementById('planSearch').value;
            planIds = plans.filter(plan => 
                plan.plan_name.includes(searchValue) || 
                plan.category.includes(searchValue)
            ).map(plan => plan.plan_id);
        } else if (planSelection === 'selected') {
            planIds = Array.from(
                document.getElementById('multiPlanSelect').selectedOptions
            ).map(option => parseInt(option.value));
        }
        
        filteredRecharges = filteredRecharges.filter(recharge => 
            planIds.includes(recharge.plan_id)
        );
    }
    
    // Filter by date range
    return filteredRecharges.filter(recharge => {
        const rechargeDate = new Date(recharge.recharge_date);
        return rechargeDate >= startDate && rechargeDate <= endDate;
    }).map(recharge => {
        const plan = plans.find(p => p.plan_id === recharge.plan_id);
        const subscriber = subscribers.find(s => s.subscriber_id === recharge.subscriber_id);
        
        return {
            ...recharge,
            plan_name: plan.plan_name,
            price: plan.price,
            subscriber_name: subscriber.name,
            mobile_number: subscriber.mobile_number
        };
    });
}

// Filter transactions based on date range
function filterTransactions(startDate, endDate) {
    // Filter by plan if plan filter is selected
    const planSelection = document.getElementById('planSelection').value;
    let filteredTransactions = [...transactions];
    
    if (planSelection !== 'all') {
        let planIds = [];
        
        if (planSelection === 'individual') {
            const searchValue = document.getElementById('planSearch').value;
            planIds = plans.filter(plan => 
                plan.plan_name.includes(searchValue) || 
                plan.category.includes(searchValue)
            ).map(plan => plan.plan_id);
        } else if (planSelection === 'selected') {
            planIds = Array.from(
                document.getElementById('multiPlanSelect').selectedOptions
            ).map(option => parseInt(option.value));
        }
        
        filteredTransactions = filteredTransactions.filter(transaction => 
            planIds.includes(transaction.plan_id)
        );
    }
    
    // Filter by date range
    return filteredTransactions.filter(transaction => {
        const txDate = new Date(transaction.transaction_date);
        return txDate >= startDate && txDate <= endDate;
    }).map(transaction => {
        const plan = plans.find(p => p.plan_id === transaction.plan_id);
        const subscriber = subscribers.find(s => s.subscriber_id === transaction.subscriber_id);
        
        return {
            ...transaction,
            plan_name: plan.plan_name,
            subscriber_name: subscriber.name,
            mobile_number: subscriber.mobile_number
        };
    });
}

// Display report data with pagination
function displayReportData() {
    const reportType = document.querySelector('input[name="reportType"]:checked').value;
    
    // Hide loading indicator
    document.getElementById('reportLoading').classList.add('d-none');
    document.getElementById('reportData').classList.remove('d-none');
    document.getElementById('reportPagination').classList.remove('d-none');
    
    // Set up table headers based on report type
    setupTableHeaders(reportType);
    
    // Paginate data
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, currentReportData.length);
    const paginatedData = currentReportData.slice(startIndex, endIndex);
    
    // Update pagination info
    document.getElementById('pageStart').textContent = currentReportData.length > 0 ? startIndex + 1 : 0;
    document.getElementById('pageEnd').textContent = endIndex;
    document.getElementById('totalEntries').textContent = currentReportData.length;
    
    // Update pagination buttons
    document.getElementById('prevPage').parentElement.classList.toggle('disabled', currentPage === 1);
    
    const totalPages = Math.ceil(currentReportData.length / pageSize);
    document.getElementById('nextPage').parentElement.classList.toggle('disabled', currentPage === totalPages || totalPages === 0);
    
    // Clear existing table data
    const tableBody = document.getElementById('reportTableBody');
    tableBody.innerHTML = '';
    
    // Add data rows
    if (paginatedData.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 10; // Adjust based on the maximum number of columns
        cell.textContent = 'No data found for the selected filters';
        cell.className = 'text-center py-3';
        row.appendChild(cell);
        tableBody.appendChild(row);
        return;
    }
    
    // Populate table based on report type
    paginatedData.forEach(item => {
        const row = document.createElement('tr');
        
        switch (reportType) {
            case 'subscriber':
                addSubscriberTableRow(row, item);
                break;
            case 'plan':
                addPlanTableRow(row, item);
                break;
            case 'recharge':
                addRechargeTableRow(row, item);
                break;
            case 'transaction':
                addTransactionTableRow(row, item);
                break;
        }
        
        tableBody.appendChild(row);
    });
}

// Set up table headers based on report type
function setupTableHeaders(reportType) {
    const headerRow = document.getElementById('reportTableHead');
    headerRow.innerHTML = '';
    
    const tr = document.createElement('tr');
    
    switch (reportType) {
        case 'subscriber':
            addTableHeader(tr, ['ID', 'Name', 'Mobile Number', 'Email', 'Location', 'Status', 'Current Plan', 'Expiry Date', 'Created On']);
            break;
        case 'plan':
            addTableHeader(tr, ['ID', 'Name', 'Category', '5G', 'Data/Day', 'Validity', 'Price (₹)', 'Subscribers', 'Revenue (₹)']);
            break;
        case 'recharge':
            addTableHeader(tr, ['Recharge ID', 'Subscriber', 'Mobile', 'Plan', 'Price (₹)', 'Recharge Date', 'Expiry Date', 'Status']);
            break;
        case 'transaction':
            addTableHeader(tr, ['Transaction ID', 'Subscriber', 'Mobile', 'Plan', 'Amount (₹)', 'Payment Method', 'Date', 'Status']);
            break;
    }
    
    headerRow.appendChild(tr);
}

// Add table headers
function addTableHeader(tr, headers) {
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        th.scope = 'col';
        th.className = 'text-nowrap';
        tr.appendChild(th);
    });
}

// Add subscriber table row
function addSubscriberTableRow(row, subscriber) {
    const plan = plans.find(p => p.plan_id === subscriber.plan_id);
    
    addTableCell(row, subscriber.subscriber_id);
    addTableCell(row, subscriber.name);
    addTableCell(row, subscriber.mobile_number);
    addTableCell(row, subscriber.email);
    addTableCell(row, subscriber.location);
    addTableCell(row, subscriber.status, 
        subscriber.status === 'Active' ? 'text-success' : 'text-danger');
    addTableCell(row, plan ? plan.plan_name : 'N/A');
    addTableCell(row, formatDate(subscriber.expires_on));
    addTableCell(row, formatDate(subscriber.created_at));
}

// Add plan table row
function addPlanTableRow(row, plan) {
    addTableCell(row, plan.plan_id);
    addTableCell(row, plan.plan_name);
    addTableCell(row, plan.category);
    addTableCell(row, plan.is5G ? 'Yes' : 'No', plan.is5G ? 'text-success' : '');
    addTableCell(row, plan.data_per_day);
    addTableCell(row, `${plan.validity} days`);
    addTableCell(row, plan.price.toFixed(2));
    addTableCell(row, plan.subscriber_count);
    addTableCell(row, plan.revenue.toFixed(2));
}

// Add recharge table row
function addRechargeTableRow(row, recharge) {
    addTableCell(row, recharge.recharge_id);
    addTableCell(row, recharge.subscriber_name);
    addTableCell(row, recharge.mobile_number);
    addTableCell(row, recharge.plan_name);
    addTableCell(row, recharge.price.toFixed(2));
    addTableCell(row, formatDate(recharge.recharge_date));
    addTableCell(row, formatDate(recharge.expiry_date));
    addTableCell(row, recharge.status, 
        recharge.status === 'Active' ? 'text-success' : 'text-danger');
}

// Add transaction table row
function addTransactionTableRow(row, transaction) {
    addTableCell(row, transaction.transaction_id);
    addTableCell(row, transaction.subscriber_name);
    addTableCell(row, transaction.mobile_number);
    addTableCell(row, transaction.plan_name);
    addTableCell(row, transaction.amount.toFixed(2));
    addTableCell(row, transaction.payment_method);
    addTableCell(row, formatDate(transaction.transaction_date));
    addTableCell(row, transaction.status, 
        transaction.status === 'Success' ? 'text-success' : 'text-danger');
}

// Add table cell
function addTableCell(row, content, className = '') {
    const cell = document.createElement('td');
    cell.textContent = content;
    if (className) {
        cell.className = className;
    }
    row.appendChild(cell);
}

// Download CSV
function downloadCSV() {
    if (currentReportData.length === 0) {
        showToast('No Data', 'There is no data to download');
        return;
    }
    
    const reportType = document.querySelector('input[name="reportType"]:checked').value;
    let headers = [];
    
    // Set headers based on report type
    switch (reportType) {
        case 'subscriber':
            headers = ['ID', 'Name', 'Mobile Number', 'Email', 'Location', 'Status', 'Plan ID', 'Expiry Date', 'Created On'];
            break;
        case 'plan':
            headers = ['ID', 'Name', 'Category', '5G', 'Data/Day', 'Validity', 'Price', 'Subscribers', 'Revenue'];
            break;
        case 'recharge':
            headers = ['Recharge ID', 'Subscriber ID', 'Mobile', 'Plan ID', 'Price', 'Recharge Date', 'Expiry Date', 'Status'];
            break;
        case 'transaction':
            headers = ['Transaction ID', 'Subscriber ID', 'Mobile', 'Plan ID', 'Amount', 'Payment Method', 'Date', 'Status'];
            break;
    }
    
    // Create CSV content
    let csvContent = headers.join(',') + '\n';
    
    currentReportData.forEach(item => {
        let row = [];
        
        switch (reportType) {
            case 'subscriber':
                row = [
                    item.subscriber_id,
                    `"${item.name}"`,
                    item.mobile_number,
                    `"${item.email}"`,
                    `"${item.location}"`,
                    item.status,
                    item.plan_id,
                    item.expires_on,
                    item.created_at
                ];
                break;
            case 'plan':
                row = [
                    item.plan_id,
                    `"${item.plan_name}"`,
                    `"${item.category}"`,
                    item.is5G ? 'Yes' : 'No',
                    `"${item.data_per_day}"`,
                    item.validity,
                    item.price,
                    item.subscriber_count,
                    item.revenue
                ];
                break;
            case 'recharge':
                row = [
                    item.recharge_id,
                    item.subscriber_id,
                    item.mobile_number,
                    item.plan_id,
                    item.price,item.recharge_date,
                    item.expiry_date,
                    item.status
                ];
                break;
            case 'transaction':
                row = [
                    item.transaction_id,
                    item.subscriber_id,
                    item.mobile_number,
                    item.plan_id,
                    item.amount,
                    item.payment_method,
                    item.transaction_date,
                    item.status
                ];
                break;
        }
        
        csvContent += row.join(',') + '\n';
    });
    
    // Create download link
    const encodedUri = encodeURI('data:text/csv;charset=utf-8,' + csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${reportType}_report_${formatDateForFilename(new Date())}.csv`);
    document.body.appendChild(link);
    
    // Trigger download
    link.click();
    document.body.removeChild(link);
    
    showToast('Download Started', 'The CSV file is being downloaded');
}

// Print report
function printReport() {
    if (currentReportData.length === 0) {
        showToast('No Data', 'There is no data to print');
        return;
    }
    
    // Create a printable version
    const printWindow = window.open('', '_blank');
    const reportType = document.querySelector('input[name="reportType"]:checked').value;
    const reportTitle = document.getElementById('reportTitle').textContent;
    
    // Print content
    printWindow.document.write(`
        <html>
        <head>
            <title>${reportTitle}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
                th { background-color: #f2f2f2; }
                .report-header { margin-bottom: 20px; }
                @media print {
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="report-header">
                <h2>${reportTitle}</h2>
                <p>Generated on: ${formatDate(new Date())}</p>
            </div>
            <button class="btn btn-primary no-print" onclick="window.print();return false;">Print</button>
            <button class="btn btn-secondary no-print" onclick="window.close();return false;">Close</button>
            <hr class="no-print">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
    `);
    
    // Add table headers
    let headers = [];
    switch (reportType) {
        case 'subscriber':
            headers = ['ID', 'Name', 'Mobile Number', 'Email', 'Location', 'Status', 'Current Plan', 'Expiry Date', 'Created On'];
            break;
        case 'plan':
            headers = ['ID', 'Name', 'Category', '5G', 'Data/Day', 'Validity', 'Price (₹)', 'Subscribers', 'Revenue (₹)'];
            break;
        case 'recharge':
            headers = ['Recharge ID', 'Subscriber', 'Mobile', 'Plan', 'Price (₹)', 'Recharge Date', 'Expiry Date', 'Status'];
            break;
        case 'transaction':
            headers = ['Transaction ID', 'Subscriber', 'Mobile', 'Plan', 'Amount (₹)', 'Payment Method', 'Date', 'Status'];
            break;
    }
    
    headers.forEach(header => {
        printWindow.document.write(`<th>${header}</th>`);
    });
    
    printWindow.document.write(`
                        </tr>
                    </thead>
                    <tbody>
    `);
    
    // Add table rows
    currentReportData.forEach(item => {
        printWindow.document.write('<tr>');
        
        switch (reportType) {
            case 'subscriber':
                const plan = plans.find(p => p.plan_id === item.plan_id);
                printWindow.document.write(`
                    <td>${item.subscriber_id}</td>
                    <td>${item.name}</td>
                    <td>${item.mobile_number}</td>
                    <td>${item.email}</td>
                    <td>${item.location}</td>
                    <td>${item.status}</td>
                    <td>${plan ? plan.plan_name : 'N/A'}</td>
                    <td>${formatDate(item.expires_on)}</td>
                    <td>${formatDate(item.created_at)}</td>
                `);
                break;
            case 'plan':
                printWindow.document.write(`
                    <td>${item.plan_id}</td>
                    <td>${item.plan_name}</td>
                    <td>${item.category}</td>
                    <td>${item.is5G ? 'Yes' : 'No'}</td>
                    <td>${item.data_per_day}</td>
                    <td>${item.validity} days</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${item.subscriber_count}</td>
                    <td>${item.revenue.toFixed(2)}</td>
                `);
                break;
            case 'recharge':
                printWindow.document.write(`
                    <td>${item.recharge_id}</td>
                    <td>${item.subscriber_name}</td>
                    <td>${item.mobile_number}</td>
                    <td>${item.plan_name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>${formatDate(item.recharge_date)}</td>
                    <td>${formatDate(item.expiry_date)}</td>
                    <td>${item.status}</td>
                `);
                break;
            case 'transaction':
                printWindow.document.write(`
                    <td>${item.transaction_id}</td>
                    <td>${item.subscriber_name}</td>
                    <td>${item.mobile_number}</td>
                    <td>${item.plan_name}</td>
                    <td>${item.amount.toFixed(2)}</td>
                    <td>${item.payment_method}</td>
                    <td>${formatDate(item.transaction_date)}</td>
                    <td>${item.status}</td>
                `);
                break;
        }
        
        printWindow.document.write('</tr>');
    });
    
    printWindow.document.write(`
                    </tbody>
                </table>
            </div>
            <div class="footer">
                <p>Total Records: ${currentReportData.length}</p>
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    
    showToast('Print Prepared', 'The print dialog should open soon');
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

// Format date for filename
function formatDateForFilename(date) {
    return date.toISOString().split('T')[0];
}

// Show toast notification
function showToast(title, message) {
    const toast = document.getElementById('reportToast');
    const toastInstance = new bootstrap.Toast(toast);
    
    document.getElementById('toastTitle').textContent = title;
    document.getElementById('toastMessage').textContent = message;
    
    toastInstance.show();
}

// // Set dark mode based on time of day
// function setDarkModeByTime() {
//     const currentHour = new Date().getHours();
//     const themeToggle = document.getElementById('themeToggle');
    
//     // Set dark mode between 8 PM and 6 AM
//     if (currentHour >= 20 || currentHour < 6) {
//         document.body.classList.add('dark-mode');
//         themeToggle.checked = true;
//         document.querySelector('label[for="themeToggle"]').innerHTML = '<i class="bi bi-sun"></i> Light Mode';
//     }
// }

// Placeholder for analytics data collection
function trackReportGeneration(reportType, filters) {
    // This would typically send data to a server-side analytics endpoint
    console.log('Report generated:', { type: reportType, filters: filters });
}

// Check for expired subscriptions and show notifications
function checkExpiringSubscriptions() {
    const today = new Date();
    const threeDaysLater = new Date();
    threeDaysLater.setDate(today.getDate() + 3);
    
    const expiringSubscribers = subscribers.filter(sub => {
        const expiryDate = new Date(sub.expires_on);
        return expiryDate >= today && expiryDate <= threeDaysLater;
    });
    
    if (expiringSubscribers.length > 0) {
        showToast(
            'Subscription Alert', 
            `${expiringSubscribers.length} subscriptions are expiring within 3 days.`
        );
    }
}

// Initialize expiring subscriptions check
setTimeout(checkExpiringSubscriptions, 3000);