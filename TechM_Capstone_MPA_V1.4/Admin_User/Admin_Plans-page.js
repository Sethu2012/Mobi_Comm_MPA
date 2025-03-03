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
    
    // Clear filters button
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
    
    // Add category button
    document.getElementById('saveCategoryBtn').addEventListener('click', saveCategory);
    
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
    
    // OTT checkbox toggle in category modal
    document.getElementById('fieldOTTs').addEventListener('change', function() {
        document.querySelector('.ott-options').classList.toggle('d-none', !this.checked);
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
    if (planCategories.some(cat => cat.name === categoryName)) {
        showToast('Category already exists.', 'error');
        return;
    }
    
    // Get 5G status
    const is5G = document.getElementById('is5GCategory').checked;
    
    // Add new category
    planCategories.push({
        name: categoryName,
        is5G: is5G
    });
    
    // Update dropdown
    populateCategoryDropdown();
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addCategoryModal'));
    modal.hide();
    
    // Show toast
    showToast(`Category "${categoryName}" added successfully.`, 'success');
    
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

// Save new or updated plan
function savePlan() {
    // Get form data
    const planId = document.getElementById('planId').value;
    const category = document.getElementById('planCategory').value;
    const planName = document.getElementById('planName').value.trim();
    const price = parseFloat(document.getElementById('planPrice').value);
    const validity = parseInt(document.getElementById('planValidity').value);
    
    // Validate required fields
    if (!planName || isNaN(price) || isNaN(validity)) {
        showToast('Please fill in all required fields.', 'error');
        return;
    }
    
    // Get optional fields
    const dataPerDay = document.querySelector('.plan-data-field').classList.contains('d-none') ? 
        null : document.getElementById('planDataPerDay').value;
    
    const voiceCalls = document.querySelector('.plan-voice-field').classList.contains('d-none') ? 
        null : document.getElementById('planVoiceCalls').value;
    
    const messages = document.querySelector('.plan-messages-field').classList.contains('d-none') ? 
        null : document.getElementById('planMessages').value;
    
    // OTT platforms
    let otts = '';
    if (!document.querySelector('.plan-ott-field').classList.contains('d-none')) {
        const selectedOtts = Array.from(document.querySelectorAll('.plan-ott-checkbox:checked'))
            .map(checkbox => checkbox.value);
        otts = selectedOtts.join(', ');
    }
    
    // Create plan object
    const planData = {
        category,
        plan_name: planName,
        price,
        validity,
        data_per_day: dataPerDay || '',
        voice_calls: voiceCalls || '',
        messages: messages || '',
        OTTs: otts,
        created_at: new Date().toISOString()
    };
    
    // Update existing plan or add new one
    if (planId) {
        // Update
        const index = plans.findIndex(p => p.plan_id === parseInt(planId));
        if (index !== -1) {
            planData.plan_id = parseInt(planId);
            plans[index] = planData;
            showToast(`Plan "${planName}" updated successfully.`, 'success');
        }
    } else {
        // Add new
        planData.plan_id = Math.max(...plans.map(p => p.plan_id)) + 1;
        plans.push(planData);
        showToast(`Plan "${planName}" added successfully.`, 'success');
    }
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addPlanModal'));
    modal.hide();
    
    // Re-render plans
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
