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

// Subscribers data
let subscribers = [
    {
        subscriber_id: 1,
        name: "John Doe",
        email: "john@example.com",
        mobile_number: "9876543210",
        status: "Active",
        location: "New York",
        plan_id: 2,
        expires_on: "2025-03-01",
        created_at: "2024-12-10T12:00:00Z"
    },
    {
        subscriber_id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        mobile_number: "8765432109",
        status: "Active",
        location: "Los Angeles",
        plan_id: 1,
        expires_on: "2025-02-28",
        created_at: "2025-01-05T14:30:00Z"
    },
    {
        subscriber_id: 3,
        name: "David Lee",
        email: "david@example.com",
        mobile_number: "7654321098",
        status: "Inactive",
        location: "Chicago",
        plan_id: 3,
        expires_on: "2025-03-15",
        created_at: "2024-11-20T11:15:00Z"
    },
    {
        subscriber_id: 4,
        name: "Emily Wilson",
        email: "emily@example.com",
        mobile_number: "6543210987",
        status: "Active",
        location: "Houston",
        plan_id: 2,
        expires_on: "2025-03-10",
        created_at: "2025-02-01T09:00:00Z"
    },
    {
        subscriber_id: 5,
        name: "Michael Brown",
        email: "michael@example.com",
        mobile_number: "5432109876",
        status: "Active",
        location: "Phoenix",
        plan_id: 1,
        expires_on: "2025-03-05",
        created_at: "2024-10-15T16:45:00Z"
    }
];

// Plans data
let plans = [
    {
        plan_id: 1,
        category: "Data Add-on",
        plan_name: "1GB Per Day",
        price: 199.99,
        validity: 28,
        data_per_day: "1GB",
        voice_calls: "Unlimited",
        messages: "100 SMS",
        OTTs: "Netflix, Prime",
        created_at: "2024-10-01T09:30:00Z"
    },
    {
        plan_id: 2,
        category: "Standard",
        plan_name: "Standard Plan",
        price: 299.99,
        validity: 30,
        data_per_day: "2GB",
        voice_calls: "Unlimited",
        messages: "200 SMS",
        OTTs: "Prime",
        created_at: "2024-11-01T10:00:00Z"
    },
    {
        plan_id: 3,
        category: "Premium",
        plan_name: "Premium Plan",
        price: 399.99,
        validity: 60,
        data_per_day: "Unlimited",
        voice_calls: "Unlimited",
        messages: "Unlimited",
        OTTs: "Netflix, Prime, Hulu",
        created_at: "2024-12-01T11:30:00Z"
    },
    {
        plan_id: 4,
        category: "Premium",
        plan_name: "Premium Plus",
        price: 599.99,
        validity: 90,
        data_per_day: "Unlimited",
        voice_calls: "Unlimited",
        messages: "Unlimited",
        OTTs: "Netflix, Prime, Hulu, Hotstar",
        created_at: "2025-01-15T14:30:00Z"
    },
    {
        plan_id: 5,
        category: "Standard",
        plan_name: "Basic Plan",
        price: 149.99,
        validity: 28,
        data_per_day: "0.5GB",
        voice_calls: "100 mins",
        messages: "100 SMS",
        OTTs: "",
        created_at: "2024-09-15T08:45:00Z"
    }
];

// Plan categories with 5G indicator
let planCategories = [
    { name: "Data Add-on", is5G: false },
    { name: "Standard", is5G: false },
    { name: "Premium", is5G: true }
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
    document.getElementById('adminName').textContent = admins[0].name;
    
    // Initialize filters
    initializeFilters();
    
    // Add event listeners
    addEventListeners();
    
    // Set dark mode based on time of day
    setDarkModeByTime();
});

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
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            document.querySelector('label[for="themeToggle"]').innerHTML = '<i class="bi bi-sun"></i> Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelector('label[for="themeToggle"]').innerHTML = '<i class="bi bi-moon"></i> Dark Mode';
        }
    });
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
}