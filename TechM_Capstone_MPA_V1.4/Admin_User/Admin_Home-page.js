document.addEventListener('DOMContentLoaded', function () {
    // Data
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

    // Plans
    const plans = [
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
        }
    ];

    // Transactions
    const transactions = [
        {
            transaction_id: 1,
            subscriber_id: 1,
            plan_id: 2,
            amount: 199.99,
            transaction_date: "2025-02-20T15:00:00Z",
            status: "Success"
        },
        {
            transaction_id: 2,
            subscriber_id: 2,
            plan_id: 1,
            amount: 299.99,
            transaction_date: "2025-02-22T12:00:00Z",
            status: "Success"
        }
    ];

    // Feedback
    const feedbacks = [
        {
            feedback_id: 1,
            subscriber_id: 1,
            message: "Great service!",
            status: "Unread",
            created_at: "2025-02-22T08:30:00Z"
        },
        {
            feedback_id: 2,
            subscriber_id: 2,
            message: "Good value for money",
            status: "Read",
            created_at: "2025-02-23T16:45:00Z"
        }
    ];

    // Blocked Subscribers
    let blockedSubscribers = [
        {
            block_id: 1,
            subscriber_id: 2,
            blocked_reason: "Repeated non-payment",
            blocked_at: "2025-01-15T11:00:00Z"
        }
    ];

    // Get admin from local storage or use default
    let currentAdmin = JSON.parse(localStorage.getItem('currentAdmin')) || admins[0];

    // DOM elements
    const expiringPlansTable = document.getElementById('expiring-plans-table');
    const totalSubscribersValue = document.getElementById('total-subscribers-value');
    const activeSubscribersValue = document.getElementById('active-subscribers-value');
    const inactiveSubscribersValue = document.getElementById('inactive-subscribers-value');
    const unusedPlansList = document.getElementById('unused-plans-list');
    const inactiveSubscribersList = document.getElementById('inactive-subscribers-list');
    const adminNameElement = document.getElementById('admin-name');
    const profileNameInput = document.getElementById('profile-name');
    const profileEmailInput = document.getElementById('profile-email');
    const profileModal = document.getElementById('profileModal');
    const saveProfileButton = document.getElementById('saveProfileButton');
    const notificationBell = document.getElementById('notificationBell');
    const notificationBadge = document.getElementById('notificationBadge');
    const themeSwitch = document.getElementById('themeSwitch');

    // Function to format date
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Function to filter expiring plans
    function getExpiringPlans(subscribers, plans, days) {
        const expiring = [];
        subscribers.forEach(subscriber => {
            const expiryDate = new Date(subscriber.expires_on);
            const timeDiff = expiryDate.getTime() - new Date().getTime();
            const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (dayDiff <= days && dayDiff >= 0) {
                const plan = plans.find(plan => plan.plan_id === subscriber.plan_id);
                expiring.push({
                    ...subscriber,
                    planName: plan ? plan.plan_name : 'N/A',
                    expiryDate: formatDate(subscriber.expires_on)
                });
            }
        });
        return expiring;
    }

    // Function to block subscriber
    function blockSubscriber(subscriberId) {
        const confirmation = confirm(`Are you sure you want to block subscriber ${subscriberId}?`);
        if (confirmation) {
            const subscriberToBlock = subscribers.find(s => s.subscriber_id === subscriberId);

            if (subscriberToBlock) {
                blockedSubscribers.push({
                    ...subscriberToBlock,
                    block_id: blockedSubscribers.length + 1,
                    blocked_reason: "Blocked by Admin",
                    blocked_at: new Date().toISOString()
                });

                subscribers = subscribers.filter(s => s.subscriber_id !== subscriberId);
                renderExpiringPlans();
                updateKeyMetrics();
                renderInactiveSubscribers();
                alert(`Subscriber ${subscriberId} blocked successfully.`);
            } else {
                alert(`Subscriber ${subscriberId} not found.`);
            }
        }
    }

    // Function to render expiring plans
    function renderExpiringPlans() {
        const expiringPlans = getExpiringPlans(subscribers, plans, 3);
        expiringPlansTable.innerHTML = `
            <thead>
                <tr>
                    <th>Subscriber Name</th>
                    <th>Mobile Number</th>
                    <th>Plan Name</th>
                    <th>Expiry Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${expiringPlans.map(plan => `
                    <tr>
                        <td>${plan.name}</td>
                        <td>${plan.mobile_number}</td>
                        <td>${plan.planName}</td>
                        <td>${plan.expiryDate}</td>
                        <td>
                            <button class="btn btn-sm btn-info btn-view" data-subscriber-id="${plan.subscriber_id}" data-bs-toggle="modal" data-bs-target="#subscriberDetailsModal">View Details</button>
                            <button class="btn btn-sm btn-warning btn-notify" onclick="notifySubscriber(${plan.subscriber_id})">Notify</button>
                            <button class="btn btn-sm btn-danger btn-block" onclick="blockSubscriber(${plan.subscriber_id})">Block</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }

    // Function to update key metrics
    function updateKeyMetrics() {
        totalSubscribersValue.textContent = subscribers.length;
        activeSubscribersValue.textContent = subscribers.filter(subscriber => !blockedSubscribers.find(blocked => blocked.subscriber_id === subscriber.subscriber_id)).length;
        inactiveSubscribersValue.textContent = blockedSubscribers.length;
    }

    // Function to render unused plans (example)
    function renderUnusedPlans() {
        unusedPlansList.innerHTML = '<li>No unused plans</li>'; // Replace with actual logic
    }

    // Function to render inactive subscribers
    function renderInactiveSubscribers() {
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

        const inactiveSubscribers = subscribers.filter(subscriber => {
            const createdAt = new Date(subscriber.created_at);
            return createdAt < threeMonthsAgo;
        });

        inactiveSubscribersList.innerHTML = `
            <thead>
                <tr>
                    <th>Subscriber Name</th>
                    <th>Mobile Number</th>
                    <th>Last Active Date</th>
                    <th>Location</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${inactiveSubscribers.map(subscriber => `
                    <tr>
                        <td>${subscriber.name}</td>
                        <td>${subscriber.mobile_number}</td>
                        <td>${formatDate(subscriber.created_at)}</td>
                        <td>${subscriber.location}</td>
                        <td>
                            <button class="btn btn-sm btn-danger btn-block" onclick="blockSubscriber(${subscriber.subscriber_id})">Block</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    }

    // Function to handle admin profile save
    function saveProfile() {
        currentAdmin.name = profileNameInput.value;
        currentAdmin.email = profileEmailInput.value;
        localStorage.setItem('currentAdmin', JSON.stringify(currentAdmin));
        adminNameElement.textContent = `Welcome ${currentAdmin.name}!`;
        alert('Profile updated successfully!');
        $(profileModal).modal('hide'); // Use jQuery to close the modal
    }

    // Set theme based on local storage or system preference
    function setTheme() {
        const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', storedTheme);
        themeSwitch.checked = storedTheme === 'dark';
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // Function to handle notification click (example)
    function handleNotificationClick() {
        // Implement notification logic here
        alert('No new notifications');
        // Reset notification count
        notificationBadge.style.display = 'none';
    }

    // Initialize dashboard
    function initializeDashboard() {
        // Set theme
        setTheme();

        // Set admin name
        adminNameElement.textContent = `Welcome ${currentAdmin.name}!`;

        // Populate profile modal
        profileNameInput.value = currentAdmin.name;
        profileEmailInput.value = currentAdmin.email;

        // Render initial data
        renderExpiringPlans();
        updateKeyMetrics();
        renderUnusedPlans();
        renderInactiveSubscribers();

        // Notification
        notificationBell.addEventListener('click', handleNotificationClick);
    }

    // Attach event listeners
    saveProfileButton.addEventListener('click', saveProfile);
    themeSwitch.addEventListener('change', toggleTheme);

    // Call the initialization function
    initializeDashboard();
});

// Make functions accessible globally
window.blockSubscriber = function(subscriberId) {
    const confirmation = confirm(`Are you sure you want to block subscriber ${subscriberId}?`);
    if (confirmation) {
        // Find the subscriber to block
        const subscriberToBlock = subscribers.find(s => s.subscriber_id === subscriberId);

        if (subscriberToBlock) {
            // Add the subscriber to the BlockedSubscribers array
            blockedSubscribers.push(subscriberToBlock);

            // Remove the subscriber from the subscribers array
            subscribers = subscribers.filter(s => s.subscriber_id !== subscriberId);

            renderExpiringPlans();
            updateKeyMetrics();
            renderInactiveSubscribers();
            alert(`Subscriber ${subscriberId} blocked successfully.`);
        } else {
            alert(`Subscriber ${subscriberId} not found.`);
        }
    }
};

window.notifySubscriber = function(subscriberId) {
    alert(`Notification sent to subscriber ${subscriberId}`);
};
