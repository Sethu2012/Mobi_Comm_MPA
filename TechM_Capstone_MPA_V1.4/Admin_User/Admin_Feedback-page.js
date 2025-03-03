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
