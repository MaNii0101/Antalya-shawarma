// ========================================
// ANTALYA SHAWARMA UK - COMPLETE SYSTEM
// Email Verification, Owner Access, Notifications, Customization
// VERSION: 2.2.0 - FULLY UK SYSTEM (No Iraq references)
// ========================================

// ========================================
// UK DELIVERY CONFIGURATION
// ========================================
const UK_CONFIG = {
    restaurant: {
        name: 'Antalya Shawarma',
        address: '181 Market St, Hyde SK14 1HF',
        lat: 53.4514,
        lng: -2.0839
    },
    deliveryZones: {
        free: { max: 1, price: 0 },
        zone1: { min: 1, max: 3, price: 3.99 },
        zone2: { min: 3, max: 6, price: 5.99 }
    },
    maxDeliveryDistance: 6,
    currency: '£'
};

// Calculate distance in miles (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3959; // Earth radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Get delivery cost based on distance
function getDeliveryCost(distance) {
    if (distance > UK_CONFIG.maxDeliveryDistance) {
        return { 
            available: false, 
            cost: 0, 
            message: `❌ Outside delivery area (max ${UK_CONFIG.maxDeliveryDistance} miles)`,
            distance: distance.toFixed(1)
        };
    }
    if (distance <= UK_CONFIG.deliveryZones.free.max) {
        return { 
            available: true, 
            cost: 0, 
            message: '✅ FREE Delivery!',
            distance: distance.toFixed(1)
        };
    }
    if (distance <= UK_CONFIG.deliveryZones.zone1.max) {
        return { 
            available: true, 
            cost: UK_CONFIG.deliveryZones.zone1.price, 
            message: `📍 ${distance.toFixed(1)} miles - £${UK_CONFIG.deliveryZones.zone1.price}`,
            distance: distance.toFixed(1)
        };
    }
    if (distance <= UK_CONFIG.deliveryZones.zone2.max) {
        return { 
            available: true, 
            cost: UK_CONFIG.deliveryZones.zone2.price,
            message: `📍 ${distance.toFixed(1)} miles - £${UK_CONFIG.deliveryZones.zone2.price}`,
            distance: distance.toFixed(1)
        };
    }
    return { available: false, cost: 0, message: '❌ Outside delivery area' };
}

// Format price in GBP
function formatPrice(amount) {
    return UK_CONFIG.currency + parseFloat(amount).toFixed(2);
}

// ========================================
// MENU DATA WITH CUSTOMIZATION OPTIONS
// ========================================
const menuData = {
    shawarma: [
        { id: 101, name: 'Chicken Shawarma', price: 7.99, icon: '🌯', desc: 'Tender chicken, garlic sauce', 
          options: [
            {name: 'Extra Meat', price: 2.00},
            {name: 'Extra Garlic Sauce', price: 0.50},
            {name: 'Add Cheese', price: 1.00},
            {name: 'Make it Spicy', price: 0}
          ]
        },
        { id: 102, name: 'Beef Shawarma', price: 8.99, icon: '🌯', desc: 'Juicy beef, tahini sauce',
          options: [
            {name: 'Extra Meat', price: 2.50},
            {name: 'Extra Tahini', price: 0.50},
            {name: 'Add Pickles', price: 0.50},
            {name: 'Make it Spicy', price: 0}
          ]
        },
        { id: 103, name: 'Mixed Shawarma', price: 9.99, icon: '🌯', desc: 'Chicken & beef combo',
          options: [
            {name: 'Extra Meat', price: 3.00},
            {name: 'Add Cheese', price: 1.00},
            {name: 'Extra Sauce', price: 0.50}
          ]
        },
        { id: 104, name: 'Lamb Shawarma', price: 10.99, icon: '🌯', desc: 'Premium lamb meat',
          options: [
            {name: 'Extra Lamb', price: 3.50},
            {name: 'Add Hummus', price: 1.00},
            {name: 'Make it Spicy', price: 0}
          ]
        }
    ],
    burgers: [
        { id: 1, name: 'Classic Burger', price: 8.99, icon: '🍔', desc: 'Juicy beef patty with fresh veggies',
          options: [
            {name: 'Extra Patty', price: 2.50},
            {name: 'Add Cheese', price: 1.00},
            {name: 'Add Bacon', price: 1.50},
            {name: 'Extra Sauce', price: 0.50}
          ]
        },
        { id: 2, name: 'Cheese Burger', price: 9.99, icon: '🍔', desc: 'Double cheese, double delicious',
          options: [
            {name: 'Extra Cheese', price: 1.00},
            {name: 'Add Bacon', price: 1.50},
            {name: 'Extra Patty', price: 2.50}
          ]
        },
        { id: 3, name: 'Bacon Burger', price: 10.99, icon: '🍔', desc: 'Crispy bacon strips on top',
          options: [
            {name: 'Extra Bacon', price: 2.00},
            {name: 'Add Cheese', price: 1.00},
            {name: 'Add Egg', price: 1.00}
          ]
        },
        { id: 4, name: 'Mega Burger', price: 12.99, icon: '🍔', desc: 'Triple patty monster',
          options: [
            {name: 'Extra Patty', price: 2.50},
            {name: 'Add Cheese', price: 1.00},
            {name: 'Add Everything', price: 3.00}
          ]
        }
    ],
    pizza: [
        { id: 5, name: 'Pepperoni Pizza', price: 11.99, icon: '🍕', desc: 'Loaded with pepperoni',
          options: [
            {name: 'Extra Cheese', price: 2.00},
            {name: 'Extra Pepperoni', price: 2.50},
            {name: 'Stuffed Crust', price: 3.00},
            {name: 'Add Mushrooms', price: 1.50}
          ]
        },
        { id: 6, name: 'Margherita', price: 9.99, icon: '🍕', desc: 'Classic tomato and cheese',
          options: [
            {name: 'Extra Cheese', price: 2.00},
            {name: 'Add Basil', price: 0.50},
            {name: 'Extra Tomatoes', price: 1.00}
          ]
        },
        { id: 7, name: 'BBQ Chicken', price: 13.99, icon: '🍕', desc: 'BBQ sauce and grilled chicken',
          options: [
            {name: 'Extra Chicken', price: 3.00},
            {name: 'Extra BBQ Sauce', price: 0.50},
            {name: 'Add Onions', price: 1.00}
          ]
        },
        { id: 8, name: 'Veggie Supreme', price: 10.99, icon: '🍕', desc: 'Fresh vegetables',
          options: [
            {name: 'Extra Veggies', price: 2.00},
            {name: 'Add Cheese', price: 2.00},
            {name: 'Add Olives', price: 1.50}
          ]
        }
    ],
    chicken: [
        { id: 9, name: 'Fried Chicken Box', price: 14.99, icon: '🍗', desc: '8 pieces crispy chicken',
          options: [
            {name: 'Extra Piece (2pc)', price: 3.00},
            {name: 'Spicy Coating', price: 0},
            {name: 'Extra Sauce', price: 0.50}
          ]
        },
        { id: 10, name: 'Chicken Wings', price: 9.99, icon: '🍗', desc: 'Spicy buffalo wings',
          options: [
            {name: 'Extra Wings (6pc)', price: 4.00},
            {name: 'Extra Spicy', price: 0},
            {name: 'Ranch Dip', price: 0.75}
          ]
        },
        { id: 11, name: 'Chicken Tenders', price: 8.99, icon: '🍗', desc: 'Crispy chicken strips',
          options: [
            {name: 'Extra Tenders (3pc)', price: 2.50},
            {name: 'Honey Mustard', price: 0.50},
            {name: 'BBQ Sauce', price: 0.50}
          ]
        }
    ],
    sandwiches: [
        { id: 13, name: 'Club Sandwich', price: 7.99, icon: '🥪', desc: 'Triple decker delight',
          options: [
            {name: 'Extra Meat', price: 2.00},
            {name: 'Add Cheese', price: 1.00},
            {name: 'Extra Bacon', price: 1.50}
          ]
        },
        { id: 14, name: 'Grilled Chicken', price: 8.99, icon: '🥪', desc: 'Healthy grilled option',
          options: [
            {name: 'Extra Chicken', price: 2.50},
            {name: 'Add Avocado', price: 1.50},
            {name: 'Add Cheese', price: 1.00}
          ]
        }
    ],
    fries: [
        { id: 17, name: 'Regular Fries', price: 3.99, icon: '🍟', desc: 'Crispy golden fries',
          options: [
            {name: 'Large Size', price: 2.00},
            {name: 'Cheese Sauce', price: 1.00},
            {name: 'Cajun Seasoning', price: 0.50}
          ]
        },
        { id: 18, name: 'Cheese Fries', price: 5.99, icon: '🍟', desc: 'Covered in melted cheese',
          options: [
            {name: 'Extra Cheese', price: 1.50},
            {name: 'Add Bacon', price: 2.00},
            {name: 'Jalapeños', price: 0.75}
          ]
        },
        { id: 19, name: 'Loaded Fries', price: 7.99, icon: '🍟', desc: 'Cheese, bacon, ranch',
          options: [
            {name: 'Extra Toppings', price: 2.50},
            {name: 'Sour Cream', price: 0.75}
          ]
        },
        { id: 20, name: 'Curly Fries', price: 4.99, icon: '🍟', desc: 'Seasoned spiral fries',
          options: [
            {name: 'Large Size', price: 2.00},
            {name: 'Extra Seasoning', price: 0.50}
          ]
        }
    ],
    drinks: [
        { id: 29, name: 'Coca Cola', price: 2.99, icon: '🥤', desc: 'Ice cold soda' },
        { id: 30, name: 'Fresh Juice', price: 3.99, icon: '🧃', desc: 'Orange or apple' },
        { id: 31, name: 'Milkshake', price: 4.99, icon: '🥤', desc: 'Chocolate, vanilla, strawberry' },
        { id: 32, name: 'Coffee', price: 2.49, icon: '☕', desc: 'Freshly brewed coffee' }
    ]
};

// Owner & Owner Credentials
const OWNER_CREDENTIALS = {
    email: 'admin@antalyashawarma.com',
    password: 'admin2024',
    pin: '1234'
};


let ownerBankDetails = {
    bankName: 'Barclays Bank UK',
    accountNumber: '12345678',
    sortCode: '20-00-00',
    iban: 'GB29 NWBK 6016 1331 9268 19',
    cardNumber: '4532 **** **** 1234'
};

// Global State
let cart = [];
let currentUser = null;
let selectedFood = null;
let selectedCustomizations = [];
let quantity = 1;
let isSignUpMode = false;
let currentCategory = 'shawarma';
let userDatabase = [];
let orderHistory = [];
let userFavorites = {};
let userNotifications = {};
let selectedLocation = null;
let googleMap = null;
let mapMarker = null;
let isEditingLocation = false;
let pendingOrders = [];
let isOwnerLoggedIn = false;
let pendingVerification = null;

// Owner Mode Trigger



// Email Verification System
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendVerificationEmail(email, code) {
    console.log(`📧 Verification code for ${email}: ${code}`);
    alert(`📧 Verification Code Sent!\n\nA 6-digit code has been sent to:\n${email}\n\n(Demo: Code is ${code})`);
}

function handleEmailAuth(event) {
    event.preventDefault();
    
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    const name = document.getElementById('authName').value.trim();
    const phone = document.getElementById('authPhone').value.trim();
    const age = document.getElementById('authAge') ? document.getElementById('authAge').value : null;
    
    const emailValidation = isValidEmail(email);
    if (!emailValidation.valid) {
        alert(emailValidation.message);
        return;
    }
    
    if (password.length < 6) {
        alert('❌ Password must be at least 6 characters');
        return;
    }
    
    if (isSignUpMode) {
        const existingUser = userDatabase.find(u => u.email === email);
        if (existingUser) {
            alert('❌ Email already exists!');
            return;
        }
        
        if (name.length < 2) {
            alert('❌ Name must be at least 2 characters');
            return;
        }
        
        if (!isValidPhone(phone)) {
            alert('❌ Invalid phone number');
            return;
        }
        
        if (!selectedLocation) {
            alert('❌ Please select delivery location');
            return;
        }
        
        // Generate and send verification code
        const verificationCode = generateVerificationCode();
        pendingVerification = {
            email: email,
            password: password,
            name: name,
            phone: phone,
            age: age ? parseInt(age) : null,
            code: verificationCode,
            type: 'signup'
        };
        
        sendVerificationEmail(email, verificationCode);
        
        // Show verification section
        document.getElementById('authFormSection').style.display = 'none';
        document.getElementById('emailVerificationSection').style.display = 'block';
        document.getElementById('verifyEmailDisplay').textContent = email;
        
    } else {
        // Login
        const existingUser = userDatabase.find(u => u.email === email);
        if (!existingUser) {
            alert('❌ Account not found!');
            return;
        }
        
        if (existingUser.password !== password) {
            alert('❌ Incorrect password!');
            return;
        }
        
        // Send verification code for login
        const verificationCode = generateVerificationCode();
        pendingVerification = {
            user: existingUser,
            code: verificationCode,
            type: 'login'
        };
        
        sendVerificationEmail(email, verificationCode);
        
        document.getElementById('authFormSection').style.display = 'none';
        document.getElementById('emailVerificationSection').style.display = 'block';
        document.getElementById('verifyEmailDisplay').textContent = email;
    }
}

function verifyCode() {
    const enteredCode = document.getElementById('verificationCode').value;
    
    if (!pendingVerification) {
        alert('❌ No verification pending');
        return;
    }
    
    if (enteredCode !== pendingVerification.code) {
        alert('❌ Invalid verification code!');
        return;
    }
    
    if (pendingVerification.type === 'signup') {
        // Complete signup
        const newUser = {
            name: pendingVerification.name,
            email: pendingVerification.email,
            password: pendingVerification.password,
            phone: pendingVerification.phone,
            age: pendingVerification.age || null,
            picture: null,
            location: selectedLocation,
            verified: true,
            createdAt: new Date().toISOString()
        };
        
        userDatabase.push(newUser);
        localStorage.setItem('restaurantUsers', JSON.stringify(userDatabase));
        currentUser = newUser;
        alert(`✅ Account created! Welcome ${newUser.name}!`);
        
    } else {
        // Complete login
        currentUser = pendingVerification.user;
        alert(`✅ Welcome back ${currentUser.name}!`);
    }
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateHeaderForLoggedInUser();
    updateFavoritesBadge();
    updateNotificationBadge();
    closeModal('loginModal');
    
    // Reset
    document.getElementById('authFormSection').style.display = 'block';
    document.getElementById('emailVerificationSection').style.display = 'none';
    document.getElementById('verificationCode').value = '';
    pendingVerification = null;
    selectedLocation = null;
}

function resendCode() {
    if (pendingVerification) {
        const newCode = generateVerificationCode();
        pendingVerification.code = newCode;
        const email = pendingVerification.email || pendingVerification.user.email;
        sendVerificationEmail(email, newCode);
    }
}

// Notifications System
function addNotification(userId, message, type = 'info') {
    if (!userNotifications[userId]) {
        userNotifications[userId] = [];
    }
    
    userNotifications[userId].unshift({
        id: Date.now(),
        message: message,
        type: type,
        date: new Date().toISOString(),
        read: false
    });
    
    localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
    updateNotificationBadge();
    playNotificationSound();
}

function showNotifications() {
    // Check if driver is logged in first
    var driverId = sessionStorage.getItem('loggedInDriver');
    if (driverId) {
        showDriverNotifications();
        return;
    }
    
    if (!currentUser) {
        alert('⚠️ Please login to view notifications');
        showLogin();
        return;
    }
    
    const modal = document.getElementById('notificationsModal');
    const content = document.getElementById('notificationsContent');
    const notifications = userNotifications[currentUser.email] || [];
    
    if (notifications.length === 0) {
        content.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: rgba(255,255,255,0.5);">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🔔</div>
                <p>No notifications</p>
            </div>
        `;
    } else {
        content.innerHTML = notifications.map(notif => `
            <div style="background: rgba(255,255,255,0.05); padding: 1.2rem; border-radius: 10px; margin-bottom: 1rem; border-left: 3px solid ${
                notif.type === 'success' ? '#10b981' : notif.type === 'error' ? '#ef4444' : '#6ba3ff'
            };">
                <div style="color: #fff; font-weight: 600; margin-bottom: 0.5rem;">${notif.message}</div>
                <div style="color: rgba(255,255,255,0.5); font-size: 0.85rem;">${new Date(notif.date).toLocaleString()}</div>
            </div>
        `).join('');
        
        // Mark as read
        notifications.forEach(n => n.read = true);
        localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
        updateNotificationBadge();
    }
    
    modal.classList.add('active');
}

function updateNotificationBadge() {
    const badge = document.getElementById('notificationBadge');
    if (currentUser && userNotifications[currentUser.email]) {
        const unread = userNotifications[currentUser.email].filter(n => !n.read).length;
        badge.textContent = unread;
        badge.style.display = unread > 0 ? 'flex' : 'none';
    } else {
        badge.style.display = 'none';
    }
}

// Food Modal with Customization
function openFoodModal(foodId) {
    let food = null;
    Object.keys(menuData).forEach(category => {
        const found = menuData[category].find(item => item.id === foodId);
        if (found) food = found;
    });
    
    if (!food) return;
    
    selectedFood = food;
    selectedCustomizations = [];
    quantity = 1;
    
    document.getElementById('modalFoodName').textContent = food.name;
    document.getElementById('modalFoodIcon').textContent = food.icon;
    document.getElementById('modalFoodDesc').textContent = food.desc;
    document.getElementById('modalFoodPrice').textContent = '£' + food.price.toFixed(2);
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('specialInstructions').value = '';
    
    // Show customization options
    if (food.options && food.options.length > 0) {
        const customSection = document.getElementById('customizationSection');
        const customOptions = document.getElementById('customOptions');
        customSection.style.display = 'block';
        
        customOptions.innerHTML = food.options.map((option, index) => `
            <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; border: 1px solid rgba(255,255,255,0.1);">
                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; flex: 1;">
                    <input type="checkbox" onchange="toggleCustomization(${index})" style="width: 20px; height: 20px; cursor: pointer;">
                    <span style="color: #fff;">${option.name}</span>
                </label>
                <span style="color: #10b981; font-weight: 600;">${option.price > 0 ? '+£' + option.price.toFixed(2) : 'FREE'}</span>
            </div>
        `).join('');
    } else {
        document.getElementById('customizationSection').style.display = 'none';
    }
    
    updateTotalPrice();
    document.getElementById('foodModal').classList.add('active');
}

function toggleCustomization(index) {
    const option = selectedFood.options[index];
    const existingIndex = selectedCustomizations.findIndex(c => c.name === option.name);
    
    if (existingIndex > -1) {
        selectedCustomizations.splice(existingIndex, 1);
    } else {
        selectedCustomizations.push(option);
    }
    
    updateTotalPrice();
}

function updateTotalPrice() {
    const basePrice = selectedFood.price;
    const customPrice = selectedCustomizations.reduce((sum, c) => sum + c.price, 0);
    const total = (basePrice + customPrice) * quantity;
    document.getElementById('totalPrice').textContent = '£' + total.toFixed(2);
}

function changeQuantity(delta) {
    quantity = Math.max(1, quantity + delta);
    document.getElementById('quantity').textContent = quantity;
    updateTotalPrice();
}

function addToCart() {
    if (!currentUser) {
        alert('⚠️ Please login to add items');
        closeModal('foodModal');
        showLogin();
        return;
    }
    
    const instructions = document.getElementById('specialInstructions').value;
    const customPrice = selectedCustomizations.reduce((sum, c) => sum + c.price, 0);
    
    cart.push({
        ...selectedFood,
        quantity: quantity,
        customizations: [...selectedCustomizations],
        customizationPrice: customPrice,
        finalPrice: selectedFood.price + customPrice,
        instructions: instructions,
        addedAt: new Date().toISOString()
    });
    
    updateCartBadge();
    saveCart();
    closeModal('foodModal');
    alert('✅ Added to cart!');
}

// Owner Dashboard - Simple Order Management
function showOwnerDashboard() {
    console.log('👨‍💼 showOwnerDashboard() called');
    console.log('isOwnerLoggedIn:', isOwnerLoggedIn);
    console.log('isOwnerLoggedIn:', isOwnerLoggedIn);
    
    // If owner is logged in, show owner dashboard instead
    if (isOwnerLoggedIn) {
        console.log('⚠️ Owner is logged in, redirecting to owner dashboard');
        showOwnerDashboard();
        return;
    }
    
    console.log('✅ Proceeding with owner dashboard');
    const modal = document.getElementById('ownerModal');
    const content = document.getElementById('ownerContent');
    console.log('Modal:', modal);
    console.log('Content:', content);
    
    if (!modal || !content) {
        console.error('❌ Modal or content not found!');
        alert('Error: Dashboard elements not found!');
        return;
    }
    
    const pending = pendingOrders.filter(o => o.status === 'pending');
    const approved = orderHistory.filter(o => o.status === 'approved');
    const completed = orderHistory.filter(o => o.status === 'completed');
    const totalRevenue = completed.reduce((sum, o) => sum + o.total, 0);
    const todayRevenue = completed.filter(o => new Date(o.date).toDateString() === new Date().toDateString()).reduce((sum, o) => sum + o.total, 0);
    
    content.innerHTML = `
        <!-- Owner Header -->
        <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 2rem; border-radius: 12px; margin-bottom: 2rem; text-align: center;">
            <h2 style="margin: 0; color: white;">🏢 Restaurant Dashboard</h2>
            <p style="margin: 0.5rem 0 0 0; color: rgba(255,255,255,0.9);">Order Management System</p>
        </div>
        
        <!-- Revenue Stats -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 1.5rem; border-radius: 12px; text-align: center;">
                <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 0.5rem;">Today</div>
                <div style="font-size: 1.8rem; font-weight: 700;">${formatPrice(todayRevenue)}</div>
            </div>
            <div style="background: linear-gradient(135deg, #3b82f6, #2563eb); padding: 1.5rem; border-radius: 12px; text-align: center;">
                <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 0.5rem;">Total Revenue</div>
                <div style="font-size: 1.8rem; font-weight: 700;">${formatPrice(totalRevenue)}</div>
            </div>
            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 1.5rem; border-radius: 12px; text-align: center;">
                <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 0.5rem;">Pending</div>
                <div style="font-size: 1.8rem; font-weight: 700;">${pending.length}</div>
            </div>
            <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); padding: 1.5rem; border-radius: 12px; text-align: center;">
                <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 0.5rem;">Completed</div>
                <div style="font-size: 1.8rem; font-weight: 700;">${completed.length}</div>
            </div>
        </div>
        
        <!-- Pending Orders -->
        <h3 style="color: #fff; margin-bottom: 1rem;">📋 Pending Orders (${pending.length})</h3>
        <div style="display: grid; gap: 1rem; margin-bottom: 2rem; max-height: 500px; overflow-y: auto;">
            ${pending.length === 0 ? 
                '<div style="text-align: center; padding: 3rem; background: rgba(255,255,255,0.03); border-radius: 12px;"><p style="color: rgba(255,255,255,0.5); font-size: 1.1rem;">No pending orders</p></div>' :
                pending.map(order => `
                    <div style="background: linear-gradient(135deg, rgba(245,158,11,0.1), rgba(217,119,6,0.05)); padding: 1.5rem; border-radius: 12px; border: 2px solid rgba(245,158,11,0.3);">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <div style="color: #f59e0b; font-weight: 700; font-size: 1.1rem;">Order #${order.id.slice(-8)}</div>
                                <div style="color: rgba(255,255,255,0.8); margin-top: 0.3rem;">👤 ${order.userName}</div>
                                <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">📞 ${order.userPhone}</div>
                                <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-top: 0.3rem;">📍 ${order.deliveryAddress?.address || 'Pickup'}</div>
                            </div>
                            <div style="text-align: right;">
                                <div style="color: #10b981; font-weight: 700; font-size: 1.5rem;">${formatPrice(order.total)}</div>
                                <div style="color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-top: 0.3rem;">${new Date(order.date).toLocaleString()}</div>
                            </div>
                        </div>
                        
                        <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            ${order.items.map(item => `
                                <div style="color: rgba(255,255,255,0.8); margin-bottom: 0.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                    <strong>${item.icon} ${item.name}</strong> × ${item.quantity}
                                    ${item.customizations && item.customizations.length > 0 ? 
                                        '<div style="color: rgba(255,255,255,0.6); font-size: 0.85rem; margin-top: 0.3rem;">+ ' + item.customizations.map(c => c.name).join(', ') + '</div>' : ''}
                                </div>
                            `).join('')}
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.8rem;">
                            <button onclick="acceptOrder('${order.id}')" class="submit-btn" style="background: linear-gradient(45deg, #10b981, #059669); padding: 1rem;">
                                ✅ Accept Order
                            </button>
                            <button onclick="sendOrderToDrivers('${order.id}', ${JSON.stringify({address: order.deliveryAddress?.address || 'Pickup', items: order.items.length, total: order.total}).replace(/"/g, '&quot;')})" class="submit-btn" style="background: linear-gradient(45deg, #8b5cf6, #7c3aed); padding: 1rem;">
                                🚗 Send to Drivers
                            </button>
                            <button onclick="rejectOrder('${order.id}')" class="submit-btn" style="background: linear-gradient(45deg, #ef4444, #dc2626); padding: 1rem;">
                                ❌ Reject
                            </button>
                        </div>
                    </div>
                `).join('')
            }
        </div>
        
        <!-- Logout Button -->
        <button onclick="ownerLogout()" class="submit-btn" style="width: 100%; margin-top: 2rem; background: rgba(239,68,68,0.2); color: #ef4444; border: 2px solid #ef4444;">
            🚪 Logout
        </button>
    `;
    
    console.log('✅ Owner content set, opening modal...');
    modal.classList.add('active');
    console.log('✅ Owner dashboard modal should be visible now!');
    
    if (pending.length > 0) {
        playNotificationSound();
    }
}

function editBankDetails() {
    const bankName = prompt('Bank Name:', ownerBankDetails.bankName);
    if (bankName) ownerBankDetails.bankName = bankName;
    
    const accountNumber = prompt('Account Number:', ownerBankDetails.accountNumber);
    if (accountNumber) ownerBankDetails.accountNumber = accountNumber;
    
    const iban = prompt('IBAN:', ownerBankDetails.iban);
    if (iban) ownerBankDetails.iban = iban;
    
    const cardNumber = prompt('Card Number (last 4 digits):', ownerBankDetails.cardNumber);
    if (cardNumber) ownerBankDetails.cardNumber = cardNumber;
    
    localStorage.setItem('ownerBankDetails', JSON.stringify(ownerBankDetails));
    alert('✅ Bank details updated!');
    showOwnerDashboard();
}

function acceptOrder(orderId) {
    const orderIndex = pendingOrders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;
    
    if (confirm('✅ Accept this order?\n\nPayment will be transferred to your account.')) {
        const order = pendingOrders[orderIndex];
        order.status = 'completed';
        order.completedAt = new Date().toISOString();
        
        orderHistory.push(order);
        pendingOrders.splice(orderIndex, 1);
        
        localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
        
        // Notify customer
        addNotification(order.userEmail, 
            `✅ Order #${order.id.slice(0, 8)} accepted! Your food will arrive in 30-45 minutes.`, 
            'success');
        
        alert(`✅ Order Accepted!\n\nPayment: ${formatPrice(order.total)} transferred to your account.`);
        showOwnerDashboard();
    }
}

function rejectOrder(orderId) {
    const orderIndex = pendingOrders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;
    
    const reason = prompt('❌ Reason for rejection:');
    if (reason === null) return;
    
    if (confirm('Reject order? Money will be refunded.')) {
        const order = pendingOrders[orderIndex];
        order.status = 'rejected';
        order.rejectedAt = new Date().toISOString();
        order.rejectionReason = reason;
        
        orderHistory.push(order);
        pendingOrders.splice(orderIndex, 1);
        
        localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
        
        // Notify customer
        addNotification(order.userEmail, 
            `❌ Order #${order.id.slice(0, 8)} was rejected. Reason: ${reason}. Money refunded to your account.`, 
            'error');
        
        alert(`💰 Order Rejected\n\nMoney refunded: ${formatPrice(order.total)}`);
        showOwnerDashboard();
    }
}

// Payment Handler
function handlePayment(event) {
    event.preventDefault();
    
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    if (!paymentMethod) {
        alert('⚠️ Please select a payment method');
        return;
    }
    
    // Validate card details only if card payment selected
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('paymentCardNumber').value;
        const cardName = document.getElementById('paymentCardName').value;
        const expiry = document.getElementById('paymentExpiry').value;
        const cvv = document.getElementById('paymentCVV').value;
        
        if (!isValidCardNumber(cardNumber)) {
            alert('❌ Invalid card number!');
            return;
        }
        
        if (!isValidExpiry(expiry)) {
            alert('❌ Invalid expiry date!');
            return;
        }
        
        if (!isValidCVV(cvv)) {
            alert('❌ Invalid CVV!');
            return;
        }
    }
    
    // Get delivery info from modal
    const modal = document.getElementById('checkoutModal');
    const deliveryCost = parseFloat(modal.dataset.deliveryCost || 0);
    const deliveryDistance = modal.dataset.deliveryDistance || '0';
    const deliveryMessage = modal.dataset.deliveryMessage || '';
    
    const subtotal = cart.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0);
    const total = subtotal + deliveryCost;
    
    const order = {
        id: 'ORD-' + Date.now(),
        userEmail: currentUser.email,
        userName: currentUser.name,
        userPhone: currentUser.phone,
        items: [...cart],
        subtotal: subtotal,
        deliveryCost: deliveryCost,
        deliveryDistance: deliveryDistance,
        total: total,
        paymentMethod: paymentMethod,
        date: new Date().toISOString(),
        status: 'pending',
        location: currentUser.location ? (currentUser.location.address || `${currentUser.location.lat}, ${currentUser.location.lng}`) : 'No location'
    };
    
    pendingOrders.push(order);
    localStorage.setItem('pendingOrders', JSON.stringify(pendingOrders));
    
    addNotification(currentUser.email, 
        `🎉 Order #${order.id.slice(-8)} placed!\n${deliveryMessage}\nTotal: ${formatPrice(total)}\nPayment: ${paymentMethod === 'cash' ? 'Cash on Delivery 💷' : 'Card Payment 💳'}`, 
        'info');
    
    cart = [];
    updateCartBadge();
    saveCart();
    closeModal('checkoutModal');
    
    alert(`✅ Payment Successful!\n\nOrder ID: ${order.id.slice(-8)}\n${deliveryMessage}\nSubtotal: ${formatPrice(subtotal)}\nDelivery: ${deliveryCost === 0 ? 'FREE' : formatPrice(deliveryCost)}\nTotal: ${formatPrice(total)}\nPayment: ${paymentMethod === 'cash' ? 'Cash on Delivery 💷' : 'Card Payment 💳'}\n\n⏳ Waiting for restaurant approval...`);
}

// Initialize
window.onload = function() {
    displayMenu('shawarma');
    loadUserData();
    loadDrivers(); // Load driver data
};

function loadUserData() {
    const savedUsers = localStorage.getItem('restaurantUsers');
    if (savedUsers) userDatabase = JSON.parse(savedUsers);
    
    const savedOrders = localStorage.getItem('orderHistory');
    if (savedOrders) orderHistory = JSON.parse(savedOrders);
    
    const savedPending = localStorage.getItem('pendingOrders');
    if (savedPending) pendingOrders = JSON.parse(savedPending);
    
    const savedFavorites = localStorage.getItem('userFavorites');
    if (savedFavorites) userFavorites = JSON.parse(savedFavorites);
    
    const savedNotifications = localStorage.getItem('userNotifications');
    if (savedNotifications) userNotifications = JSON.parse(savedNotifications);
    
    const savedBankDetails = localStorage.getItem('ownerBankDetails');
    if (savedBankDetails) ownerBankDetails = JSON.parse(savedBankDetails);
    
    const savedCurrentUser = localStorage.getItem('currentUser');
    if (savedCurrentUser) {
        currentUser = JSON.parse(savedCurrentUser);
        updateHeaderForLoggedInUser();
        
        const savedCart = localStorage.getItem('cart_' + currentUser.email);
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartBadge();
        }
        updateFavoritesBadge();
        updateNotificationBadge();
    }
}

// Rest of functions remain similar but adapted...
// (Display menu, favorites, cart, account, etc.)

function displayMenu(category) {
    currentCategory = category;
    const menuGrid = document.getElementById('menuGrid');
    const menuTitle = document.getElementById('menuTitle');
    
    menuTitle.textContent = 'Our ' + category.charAt(0).toUpperCase() + category.slice(1);
    menuGrid.innerHTML = '';
    
    const items = menuData[category] || [];
    items.forEach(item => {
        const isFavorite = currentUser && userFavorites[currentUser.email]?.includes(item.id);
        
        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${item.id}, event)">
                ${isFavorite ? '❤️' : '🤍'}
            </button>
            <div class="food-image">${item.icon}</div>
            <div class="food-info">
                <div class="food-name">${item.name}</div>
                <div class="food-desc">${item.desc}</div>
                <div class="food-footer">
                    <div class="food-price">${formatPrice(item.price)}</div>
                    <button class="add-btn" onclick="openFoodModal(${item.id})">Order</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

function filterCategory(category) {
    document.querySelectorAll('.category-item').forEach(item => item.classList.remove('active'));
    event.target.closest('.category-item').classList.add('active');
    displayMenu(category);
}

// Validation functions
function isValidEmail(email) {
    email = email.toLowerCase().trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(email)) {
        return { valid: false, message: '❌ Invalid email format' };
    }
    
    if (email.endsWith('@gmail.com')) {
        return { valid: true, provider: 'Gmail' };
    } else if (email.endsWith('@icloud.com')) {
        return { valid: true, provider: 'iCloud' };
    } else {
        return { 
            valid: false, 
            message: '❌ Only Gmail or iCloud emails accepted' 
        };
    }
}

function isValidCardNumber(cardNumber) {
    cardNumber = cardNumber.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cardNumber)) return false;
    
    let sum = 0, isEven = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);
        if (isEven) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        isEven = !isEven;
    }
    return (sum % 10) === 0;
}

function isValidCVV(cvv) {
    return /^\d{3,4}$/.test(cvv);
}

function isValidExpiry(expiry) {
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return false;
    const [month, year] = expiry.split('/').map(num => parseInt(num));
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    
    if (month < 1 || month > 12) return false;
    if (year < currentYear || (year === currentYear && month < currentMonth)) return false;
    return true;
}

function isValidPhone(phone) {
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    // UK phone: +44 7xxx xxx xxx (mobile) or +44 1xxx xxx xxx (landline)
    const ukPhoneRegex = /^(\+44|44|0)?[1-9]\d{9,10}$/;
    return ukPhoneRegex.test(cleanPhone);
}

function playNotificationSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function saveCart() {
    if (currentUser) {
        localStorage.setItem('cart_' + currentUser.email, JSON.stringify(cart));
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

function updateFavoritesBadge() {
    const badge = document.getElementById('favoritesBadge');
    if (currentUser && userFavorites[currentUser.email]) {
        const count = userFavorites[currentUser.email].length;
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    } else {
        badge.style.display = 'none';
    }
}

function toggleFavorite(foodId, event) {
    event.stopPropagation();
    
    if (!currentUser) {
        alert('⚠️ Please login');
        showLogin();
        return;
    }
    
    if (!userFavorites[currentUser.email]) {
        userFavorites[currentUser.email] = [];
    }
    
    const favorites = userFavorites[currentUser.email];
    const index = favorites.indexOf(foodId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        event.target.innerHTML = '🤍';
        event.target.classList.remove('active');
    } else {
        favorites.push(foodId);
        event.target.innerHTML = '❤️';
        event.target.classList.add('active');
    }
    
    localStorage.setItem('userFavorites', JSON.stringify(userFavorites));
    updateFavoritesBadge();
}

function showLogin() {
    document.getElementById('loginModal').classList.add('active');
    if (isSignUpMode) toggleAuthMode();
}

function toggleAuthMode() {
    isSignUpMode = !isSignUpMode;
    
    const title = document.getElementById('authTitle');
    const nameGroup = document.getElementById('nameGroup');
    const phoneGroup = document.getElementById('phoneGroup');
    const ageGroup = document.getElementById('ageGroup');
    const addressGroup = document.getElementById('addressGroup');
    const submitBtn = document.getElementById('authSubmitBtn');
    const toggleText = document.getElementById('authToggleText');
    
    if (isSignUpMode) {
        title.textContent = '📝 Create Account';
        nameGroup.style.display = 'block';
        phoneGroup.style.display = 'block';
        ageGroup.style.display = 'block';
        addressGroup.style.display = 'block';
        submitBtn.textContent = 'Sign Up';
        toggleText.textContent = 'Already have an account?';
        
        document.getElementById('authName').required = true;
        document.getElementById('authPhone').required = true;
    } else {
        title.textContent = '🔐 Login';
        nameGroup.style.display = 'none';
        phoneGroup.style.display = 'none';
        ageGroup.style.display = 'none';
        addressGroup.style.display = 'none';
        submitBtn.textContent = 'Login';
        toggleText.textContent = "Don't have an account?";
        
        document.getElementById('authName').required = false;
        document.getElementById('authPhone').required = false;
    }
}

function updateHeaderForLoggedInUser() {
    const loginBtn = document.querySelector('.login-btn');
    
    if (currentUser) {
        loginBtn.textContent = currentUser.name.split(' ')[0];
        loginBtn.style.background = 'rgba(255, 107, 107, 0.2)';
        loginBtn.style.border = '2px solid #ff6b6b';
        loginBtn.onclick = showAccount;
    } else {
        loginBtn.textContent = 'Login';
        loginBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a6f)';
        loginBtn.style.border = 'none';
        loginBtn.onclick = showLogin;
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    
    // Reset owner mode when closing owner modal
    if (modalId === 'ownerModal') {
        isOwnerLoggedIn = false;
        isOwnerLoggedIn = false;
    }
}

function scrollToMenu() {
    document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
}

function showCart() {
    if (!currentUser) {
        alert('⚠️ Please login');
        showLogin();
        return;
    }
    
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: rgba(255,255,255,0.5);">
                <div style="font-size: 4rem;">🛒</div>
                <p>Cart is empty</p>
            </div>
        `;
        cartTotal.textContent = '£0.00';
    } else {
        let total = 0;
        cartItems.innerHTML = '';
        
        cart.forEach((item, index) => {
            const itemTotal = item.finalPrice * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-header">
                    <span><strong>${item.name}</strong> × ${item.quantity}</span>
                    <span style="color: #ff6b6b;">£${itemTotal.toFixed(2)}</span>
                </div>
                ${item.customizations && item.customizations.length > 0 ? 
                    `<div style="color: rgba(255,255,255,0.5); font-size: 0.85rem; margin-top: 0.3rem;">
                        + ${item.customizations.map(c => c.name).join(', ')}
                    </div>` : ''}
                ${item.instructions ? `<div style="color: rgba(255,255,255,0.5); font-size: 0.9rem; margin-top: 0.5rem;">Note: ${item.instructions}</div>` : ''}
                <button onclick="removeFromCart(${index})" style="margin-top: 0.5rem; background: rgba(255,107,107,0.2); color: #ff6b6b; border: 1px solid rgba(255,107,107,0.3); padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        });
        
        cartTotal.textContent = '£' + total.toFixed(2);
    }
    
    modal.classList.add('active');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartBadge();
    saveCart();
    showCart();
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('⚠️ Cart is empty');
        return;
    }
    
    // Check if user has location
    if (!currentUser.location || !currentUser.location.lat || !currentUser.location.lng) {
        alert('⚠️ Please set your delivery location first!');
        closeModal('cartModal');
        pickLocation();
        return;
    }
    
    // Calculate distance and delivery cost
    const distance = calculateDistance(
        UK_CONFIG.restaurant.lat,
        UK_CONFIG.restaurant.lng,
        currentUser.location.lat,
        currentUser.location.lng
    );
    
    const deliveryInfo = getDeliveryCost(distance);
    
    if (!deliveryInfo.available) {
        alert(deliveryInfo.message + '\n\nPlease choose a location within ' + UK_CONFIG.maxDeliveryDistance + ' miles of:\n' + UK_CONFIG.restaurant.address);
        closeModal('cartModal');
        pickLocation();
        return;
    }
    
    closeModal('cartModal');
    
    const modal = document.getElementById('checkoutModal');
    const addressElem = document.getElementById('checkoutAddress');
    const itemsElem = document.getElementById('checkoutItems');
    const totalElem = document.getElementById('paymentTotal');
    
    addressElem.textContent = currentUser.location ? 
        (currentUser.location.address || `${currentUser.location.lat}, ${currentUser.location.lng}`) : 
        'No address';
    
    let subtotal = 0;
    itemsElem.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.finalPrice * item.quantity;
        subtotal += itemTotal;
        
        const div = document.createElement('div');
        div.style.cssText = 'display: flex; justify-content: space-between; margin-bottom: 0.5rem; color: rgba(255,255,255,0.8);';
        div.innerHTML = `
            <span>${item.name} × ${item.quantity}</span>
            <span>${formatPrice(itemTotal)}</span>
        `;
        itemsElem.appendChild(div);
    });
    
    // Add subtotal
    const subtotalDiv = document.createElement('div');
    subtotalDiv.style.cssText = 'display: flex; justify-content: space-between; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.9);';
    subtotalDiv.innerHTML = `
        <span>Subtotal:</span>
        <span>${formatPrice(subtotal)}</span>
    `;
    itemsElem.appendChild(subtotalDiv);
    
    // Add delivery cost
    const deliveryDiv = document.createElement('div');
    deliveryDiv.style.cssText = 'display: flex; justify-content: space-between; margin-top: 0.5rem; color: rgba(255,255,255,0.9);';
    deliveryDiv.innerHTML = `
        <span>Delivery (${deliveryInfo.distance} miles):</span>
        <span>${deliveryInfo.cost === 0 ? 'FREE' : formatPrice(deliveryInfo.cost)}</span>
    `;
    itemsElem.appendChild(deliveryDiv);
    
    // Calculate total
    const total = subtotal + deliveryInfo.cost;
    totalElem.textContent = formatPrice(total);
    
    // Store delivery info for payment
    modal.dataset.deliveryCost = deliveryInfo.cost;
    modal.dataset.deliveryDistance = deliveryInfo.distance;
    modal.dataset.deliveryMessage = deliveryInfo.message;
    
    modal.classList.add('active');
}

function showAccount() {
    // Check if driver is logged in first
    var driverId = sessionStorage.getItem('loggedInDriver');
    if (driverId) {
        showDriverProfile();
        return;
    }
    
    if (!currentUser) {
        showLogin();
        return;
    }
    
    const modal = document.getElementById('accountModal');
    const content = document.getElementById('accountContent');
    const userOrders = orderHistory.filter(o => o.userEmail === currentUser.email);
    
    // Display profile picture - Fixed SVG encoding
    let profilePicture = currentUser.picture;
    if (!profilePicture) {
        const initial = currentUser.name ? currentUser.name[0].toUpperCase() : '?';
        profilePicture = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" fill="#10b981"/><text x="50" y="50" text-anchor="middle" dy=".35em" font-size="40" fill="white" font-family="Arial">${initial}</text></svg>`)}`;
    }
    
    content.innerHTML = `
        <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
            <h3 style="margin-bottom: 1rem; color: #fff;">👤 Profile</h3>
            
            <!-- Profile Picture -->
            <div style="text-align: center; margin-bottom: 1.5rem;">
                <img src="${profilePicture}" alt="Profile" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 3px solid #10b981;">
                <div style="margin-top: 0.5rem;">
                    <button onclick="changeProfilePicture()" class="submit-btn" style="padding: 0.5rem 1rem; font-size: 0.9rem; background: rgba(16,185,129,0.2); color: #10b981; border: 1px solid #10b981;">
                        📷 Change Picture
                    </button>
                </div>
            </div>
            
            <div style="display: grid; gap: 0.8rem; color: rgba(255,255,255,0.8);">
                <div><strong>Name:</strong> ${currentUser.name} <button onclick="editName()" style="background: none; border: none; color: #10b981; cursor: pointer; font-size: 0.9rem;">✏️ Edit</button></div>
                <div><strong>Email:</strong> ${currentUser.email} <span style="color: rgba(255,255,255,0.5); font-size: 0.85rem;">(cannot change)</span></div>
                <div><strong>Phone:</strong> ${currentUser.phone || 'Not set'} <button onclick="editPhone()" style="background: none; border: none; color: #10b981; cursor: pointer; font-size: 0.9rem;">✏️ Edit</button></div>
                <div><strong>Age:</strong> ${currentUser.age || 'Not set'} <button onclick="editAge()" style="background: none; border: none; color: #10b981; cursor: pointer; font-size: 0.9rem;">✏️ Edit</button></div>
                <div><strong>Location:</strong> ${currentUser.location ? (currentUser.location.address || 'Set') : 'Not set'} <button onclick="editLocation()" style="background: none; border: none; color: #10b981; cursor: pointer; font-size: 0.9rem;">✏️ Edit</button></div>
            </div>
            
            <div style="margin-top: 1rem;">
                <button onclick="changePassword()" class="submit-btn" style="background: rgba(139,92,246,0.2); color: #8b5cf6; border: 1px solid #8b5cf6; padding: 0.7rem; font-size: 0.9rem;">
                    🔒 Change Password
                </button>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <button onclick="logout()" class="submit-btn" style="background: rgba(255,107,107,0.2); color: #ff6b6b; border: 2px solid #ff6b6b;">
                🚪 Logout
            </button>
            <button onclick="deleteAccount()" class="submit-btn" style="background: rgba(220,38,38,0.2); color: #ef4444; border: 2px solid #ef4444;">
                🗑️ Delete
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

// Edit profile functions
function editName() {
    const newName = prompt('Enter your new name:', currentUser.name);
    if (newName && newName.trim()) {
        currentUser.name = newName.trim();
        saveCurrentUser();
        showAccount();
        alert('✅ Name updated!');
    }
}

function editPhone() {
    const newPhone = prompt('Enter your new UK phone number (+44):', currentUser.phone || '+44 ');
    if (newPhone && newPhone.trim()) {
        currentUser.phone = newPhone.trim();
        saveCurrentUser();
        showAccount();
        alert('✅ Phone updated!');
    }
}

function editAge() {
    const newAge = prompt('Enter your age:', currentUser.age || '');
    if (newAge && !isNaN(newAge) && newAge > 0 && newAge < 150) {
        currentUser.age = parseInt(newAge);
        saveCurrentUser();
        showAccount();
        alert('✅ Age updated!');
    } else if (newAge) {
        alert('❌ Please enter a valid age');
    }
}

function editLocation() {
    closeModal('accountModal');
    pickLocation();
}

function changeProfilePicture() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('❌ Image too large! Max 5MB');
                return;
            }
            const reader = new FileReader();
            reader.onload = function(event) {
                currentUser.picture = event.target.result;
                saveCurrentUser();
                showAccount();
                alert('✅ Profile picture updated!');
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function changePassword() {
    const oldPassword = prompt('Enter your current password:');
    if (!oldPassword) return;
    
    if (oldPassword !== currentUser.password) {
        alert('❌ Incorrect current password!');
        return;
    }
    
    const newPassword = prompt('Enter your new password (min 6 characters):');
    if (!newPassword || newPassword.length < 6) {
        alert('❌ Password must be at least 6 characters');
        return;
    }
    
    const confirmPassword = prompt('Confirm your new password:');
    if (newPassword !== confirmPassword) {
        alert('❌ Passwords do not match!');
        return;
    }
    
    currentUser.password = newPassword;
    saveCurrentUser();
    alert('✅ Password changed successfully!');
}

function saveCurrentUser() {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    // Also update in userDatabase
    const userIndex = userDatabase.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        userDatabase[userIndex] = {...currentUser};
        localStorage.setItem('restaurantUsers', JSON.stringify(userDatabase));
    }
}

function logout() {
    if (confirm('Logout?')) {
        currentUser = null;
        cart = [];
        updateCartBadge();
        updateFavoritesBadge();
        updateNotificationBadge();
        
        localStorage.removeItem('currentUser');
        updateHeaderForLoggedInUser();
        closeModal('accountModal');
        
        alert('✅ Logged out');
    }
}

function deleteAccount() {
    if (!confirm('⚠️ Delete account? This cannot be undone.')) return;
    
    const confirmEmail = prompt('Type your email to confirm:');
    if (confirmEmail !== currentUser.email) {
        alert('❌ Email does not match');
        return;
    }
    
    userDatabase = userDatabase.filter(u => u.email !== currentUser.email);
    localStorage.setItem('restaurantUsers', JSON.stringify(userDatabase));
    
    localStorage.removeItem('cart_' + currentUser.email);
    delete userFavorites[currentUser.email];
    delete userNotifications[currentUser.email];
    localStorage.setItem('userFavorites', JSON.stringify(userFavorites));
    localStorage.setItem('userNotifications', JSON.stringify(userNotifications));
    
    currentUser = null;
    cart = [];
    localStorage.removeItem('currentUser');
    
    updateHeaderForLoggedInUser();
    updateCartBadge();
    updateFavoritesBadge();
    updateNotificationBadge();
    closeModal('accountModal');
    
    alert('✅ Account deleted');
}

function showFavorites() {
    if (!currentUser) {
        alert('⚠️ Please login');
        showLogin();
        return;
    }
    
    const modal = document.getElementById('favoritesModal');
    const content = document.getElementById('favoritesContent');
    const favorites = userFavorites[currentUser.email] || [];
    
    if (favorites.length === 0) {
        content.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: rgba(255,255,255,0.5);">
                <div style="font-size: 4rem;">💔</div>
                <p>No favorites yet</p>
            </div>
        `;
    } else {
        content.innerHTML = '<div class="menu-grid" style="margin-top: 1rem;"></div>';
        const grid = content.querySelector('.menu-grid');
        
        const favoriteItems = [];
        Object.keys(menuData).forEach(category => {
            menuData[category].forEach(item => {
                if (favorites.includes(item.id)) favoriteItems.push(item);
            });
        });
        
        favoriteItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'food-card';
            card.innerHTML = `
                <button class="favorite-btn active" onclick="toggleFavorite(${item.id}, event)">❤️</button>
                <div class="food-image">${item.icon}</div>
                <div class="food-info">
                    <div class="food-name">${item.name}</div>
                    <div class="food-desc">${item.desc}</div>
                    <div class="food-footer">
                        <div class="food-price">${formatPrice(item.price)}</div>
                        <button class="add-btn" onclick="openFoodModal(${item.id})">Order</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
    
    modal.classList.add('active');
}

// Google Maps
function pickLocation() {
    isEditingLocation = false;
    document.getElementById('mapModal').classList.add('active');
    setTimeout(initMap, 100);
}

function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    // Default to Hyde, UK (restaurant location)
    const defaultLocation = { lat: 53.4514, lng: -2.0839 };
    
    // Check if Google Maps is loaded
    if (typeof google === 'undefined' || !google.maps) {
        // Fallback to simple click map
        mapElement.innerHTML = `
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #2d2d2d, #1a1a1a); position: relative; border-radius: 10px; cursor: crosshair;" onclick="handleFallbackMapClick(event)">
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: rgba(255,255,255,0.7);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📍</div>
                    <div style="font-size: 1.1rem;">Click anywhere to set your location</div>
                    <div style="font-size: 0.85rem; margin-top: 0.5rem; opacity: 0.7;">Hyde, Greater Manchester area</div>
                </div>
                <div id="fallbackMarker" style="position: absolute; display: none; font-size: 2rem;">📍</div>
            </div>
        `;
        return;
    }
    
    // Google Maps loaded successfully - DEFAULT TO SATELLITE
            
    // Google Maps loaded successfully - DEFAULT TO SATELLITE WITH LABELS
    googleMap = new google.maps.Map(mapElement, {
        center: defaultLocation,
        zoom: 13,
        mapTypeId: 'hybrid', // HYBRID = Satellite + Labels
        fullscreenControl: true,
        streetViewControl: false,
        mapTypeControl: true
    });
    
    googleMap.addListener('click', (e) => {
        addMarker(e.latLng);
    });
    
}

// Fallback map click handler (when Google Maps not loaded)
function handleFallbackMapClick(event) {
    const mapElement = document.getElementById('map').querySelector('div');
    const rect = mapElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Convert click position to coordinates (Hyde, UK area)
    const lat = (53.4514 + (0.5 - y / rect.height) * 0.1).toFixed(6);
    const lng = (-2.0839 + (x / rect.width - 0.5) * 0.1).toFixed(6);
    
    // Show marker
    const marker = document.getElementById('fallbackMarker');
    marker.style.display = 'block';
    marker.style.left = x + 'px';
    marker.style.top = y + 'px';
    marker.style.transform = 'translate(-50%, -100%)';
    
    // Save location
    selectedLocation = {
        lat: lat,
        lng: lng,
        address: `${lat}, ${lng}`
    };
    
    document.getElementById('selectedLocationText').textContent = `📍 ${selectedLocation.address}`;
    document.getElementById('selectedLocationText').style.color = '#4ade80';
}

function addMarker(location) {
    if (googleMap && mapMarker) {
        mapMarker.setMap(null);
    }
    
    if (googleMap && typeof google !== 'undefined') {
        // Using Google Maps
        mapMarker = new google.maps.Marker({
            position: location,
            map: googleMap,
            animation: google.maps.Animation.DROP
        });
        
        selectedLocation = {
            lat: location.lat(),
            lng: location.lng(),
            address: `${location.lat().toFixed(6)}, ${location.lng().toFixed(6)}`
        };
    }
    
    document.getElementById('selectedLocationText').textContent = `📍 ${selectedLocation.address}`;
    document.getElementById('selectedLocationText').style.color = '#4ade80';
}

function confirmLocation() {
    if (!selectedLocation) {
        alert('❌ Please select a location on the map');
        return;
    }
    
    // Save to currentUser if logged in
    if (currentUser) {
        currentUser.location = selectedLocation;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    
    // Update signup form if exists
    const authAddress = document.getElementById('authAddress');
    if (authAddress) {
        authAddress.value = selectedLocation.address || `${selectedLocation.lat}, ${selectedLocation.lng}`;
    }
    
    // Update location display if exists
    const locationDisplay = document.getElementById('locationDisplay');
    if (locationDisplay) {
        locationDisplay.innerHTML = '<span style="color: #4ade80;">✓ Location set</span>';
    }
    
    // Close the modal
    closeModal('mapModal');
    
    alert(`✅ Location confirmed!\n\n${selectedLocation.address || 'Coordinates: ' + selectedLocation.lat + ', ' + selectedLocation.lng}`);
}

function showOwnerLogin() {
    document.getElementById('ownerLoginModal').classList.add('active');
}

function handleOwnerLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('ownerEmail').value;
    const password = document.getElementById('ownerPassword').value;
    
    console.log('👨‍💼 Owner login attempt:', { email, password: '***' });
    
    if (email === OWNER_CREDENTIALS.email && password === OWNER_CREDENTIALS.password) {
        console.log('✅ Owner credentials valid');
        isOwnerLoggedIn = true;
        isOwnerLoggedIn = false;
        
        console.log('👨‍💼 Closing owner login modal...');
        const loginModal = document.getElementById('ownerLoginModal');
        loginModal.classList.remove('active');
        console.log('✅ Owner login modal closed');
        
        console.log('👨‍💼 Calling showOwnerDashboard in 300ms...');
        setTimeout(() => {
            console.log('👨‍💼 Now calling showOwnerDashboard()');
            showOwnerDashboard();
        }, 300);
    } else {
        console.error('❌ Invalid owner credentials');
        alert('❌ Invalid owner credentials!\n\nPlease check your email and password.');
    }
}

function loginWithGoogle() {
    // Show instructions for Google OAuth setup
    const googleClientId = 'YOUR_GOOGLE_CLIENT_ID'; // User needs to replace this
    
    alert(`🔵 Google Sign-In Setup Required\n\n` +
        `To enable real Google authentication:\n\n` +
        `1. Go to: console.cloud.google.com\n` +
        `2. Create OAuth 2.0 credentials\n` +
        `3. Get your Client ID\n` +
        `4. Replace in code:\n` +
        `   const googleClientId = 'YOUR_ID';\n\n` +
        `For now, please use email signup with Gmail address.`);
    
    // Simulate Google login for demo (remove this in production)
    const useDemo = confirm('Use demo mode? (Creates account with demo@gmail.com)');
    if (useDemo) {
        const demoUser = {
            name: 'Demo Google User',
            email: 'demo@gmail.com',
            provider: 'Google',
            verified: true,
            createdAt: new Date().toISOString()
        };
        
        const existing = userDatabase.find(u => u.email === demoUser.email);
        if (!existing) {
            userDatabase.push(demoUser);
            localStorage.setItem('restaurantUsers', JSON.stringify(userDatabase));
        }
        
        currentUser = demoUser;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateHeaderForLoggedInUser();
        updateFavoritesBadge();
        updateNotificationBadge();
        closeModal('loginModal');
        
        alert('✅ Demo Google Login Successful!\n\nWelcome ' + demoUser.name);
    }
}

function loginWithApple() {
    // Show instructions for Apple Sign-In setup
    alert(`🍎 Apple Sign-In Setup Required\n\n` +
        `To enable real Apple authentication:\n\n` +
        `1. Register at: owner.apple.com\n` +
        `2. Configure Sign in with Apple\n` +
        `3. Get your Service ID\n` +
        `4. Add AppleID JS SDK\n\n` +
        `For now, please use email signup with iCloud address.`);
    
    // Simulate Apple login for demo (remove this in production)
    const useDemo = confirm('Use demo mode? (Creates account with demo@icloud.com)');
    if (useDemo) {
        const demoUser = {
            name: 'Demo iCloud User',
            email: 'demo@icloud.com',
            provider: 'iCloud',
            verified: true,
            createdAt: new Date().toISOString()
        };
        
        const existing = userDatabase.find(u => u.email === demoUser.email);
        if (!existing) {
            userDatabase.push(demoUser);
            localStorage.setItem('restaurantUsers', JSON.stringify(userDatabase));
        }
        
        currentUser = demoUser;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateHeaderForLoggedInUser();
        updateFavoritesBadge();
        updateNotificationBadge();
        closeModal('loginModal');
        
        alert('✅ Demo iCloud Login Successful!\n\nWelcome ' + demoUser.name);
    }
}

// Auto-format inputs
document.addEventListener('DOMContentLoaded', function() {
    const cardInput = document.getElementById('paymentCardNumber');
    if (cardInput) {
        cardInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    const expiryInput = document.getElementById('paymentExpiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function toggleMobileMenu() {
    const nav = document.getElementById('navButtons');
    const btn = document.getElementById('mobileMenuBtn');
    if (!nav || !btn) return;
    nav.classList.toggle('active');
    btn.classList.toggle('active');
    btn.textContent = nav.classList.contains('active') ? '✕' : '☰';
}

// ========================================
// OWNER DASHBOARD
// ========================================


// ========================================
// ========================================
// OWNER MODE - CLEAN IMPLEMENTATION
// ========================================

function showOwnerLogin() {
    const modal = document.getElementById('ownerModal');
    if (modal) {
        modal.classList.add('active');
        modal.style.display = 'flex';
    }
}

function handleOwnerLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('devEmail').value.trim();
    const password = document.getElementById('devPassword').value;
    const pin = document.getElementById('devPin').value;
    
    if (email === 'admin@antalyashawarma.com' && password === 'admin2024' && pin === '1234') {
        // Close login modal
        const loginModal = document.getElementById('ownerModal');
        loginModal.classList.remove('active');
        loginModal.style.display = 'none';
        
        // Set owner mode flag
        isOwnerLoggedIn = true;
        isOwnerLoggedIn = false;
        
        // Show dashboard
        showOwnerDashboard();
    } else {
        alert('❌ Access Denied!\n\nInvalid Credentials\n\nPlease contact system administrator.');
    }
}

function showOwnerDashboard() {
    const modal = document.getElementById('ownerModal');
    const content = document.getElementById('ownerContent');
    
    if (!modal || !content) {
        alert('Error: Dashboard not available');
        return;
    }
    
    // Calculate stats
    const totalOrders = orderHistory.length;
    const totalUsers = Object.keys(userDatabase).length;
    const totalDrivers = drivers.length;
    const pendingCount = pendingOrders.filter(function(o) { return o.status === 'pending'; }).length;
    const completed = orderHistory.filter(function(o) { return o.status === 'completed'; });
    const totalRevenue = completed.reduce(function(sum, o) { return sum + o.total; }, 0);
    
    // Build beautiful dashboard with string concatenation
    var html = '';
    
    // Header
    html += '<div style="background:linear-gradient(135deg,#8b5cf6,#7c3aed);padding:2.5rem;border-radius:15px;margin-bottom:2rem;text-align:center;color:white;box-shadow:0 10px 30px rgba(139,92,246,0.3)">';
    html += '<div style="font-size:3.5rem;margin-bottom:0.5rem">🔧</div>';
    html += '<h2 style="margin:0;font-size:2.5rem;font-weight:800">Owner Console</h2>';
    html += '<p style="margin:1rem 0 0;font-size:1.1rem;opacity:0.95">Full System Access & Control Panel</p>';
    html += '<div style="margin-top:1.5rem;display:inline-flex;align-items:center;gap:0.5rem;padding:0.5rem 1.5rem;background:rgba(255,255,255,0.2);border-radius:20px;font-size:0.9rem">';
    html += '<span style="width:8px;height:8px;background:#10b981;border-radius:50%;animation:pulse 2s infinite"></span>';
    html += '<span>System Active v4.0</span>';
    html += '</div>';
    html += '</div>';
    
    // Stats Grid
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1.5rem;margin-bottom:2rem">';
    
    // Revenue Card
    html += '<div style="background:linear-gradient(135deg,#10b981,#059669);padding:1.8rem;border-radius:12px;text-align:center;color:white;box-shadow:0 4px 15px rgba(16,185,129,0.3);transition:transform 0.3s">';
    html += '<div style="font-size:2.8rem;margin-bottom:0.5rem">💰</div>';
    html += '<div style="font-size:2rem;font-weight:700;margin:0.5rem 0">£' + totalRevenue.toFixed(2) + '</div>';
    html += '<div style="font-size:0.95rem;opacity:0.9">Total Revenue</div>';
    html += '</div>';
    
    // Orders Card
    html += '<div style="background:linear-gradient(135deg,#3b82f6,#2563eb);padding:1.8rem;border-radius:12px;text-align:center;color:white;box-shadow:0 4px 15px rgba(59,130,246,0.3)">';
    html += '<div style="font-size:2.8rem;margin-bottom:0.5rem">📦</div>';
    html += '<div style="font-size:2rem;font-weight:700;margin:0.5rem 0">' + totalOrders + '</div>';
    html += '<div style="font-size:0.95rem;opacity:0.9">Total Orders</div>';
    html += '</div>';
    
    // Pending Card
    html += '<div style="background:linear-gradient(135deg,#f59e0b,#d97706);padding:1.8rem;border-radius:12px;text-align:center;color:white;box-shadow:0 4px 15px rgba(245,158,11,0.3)">';
    html += '<div style="font-size:2.8rem;margin-bottom:0.5rem">⏳</div>';
    html += '<div style="font-size:2rem;font-weight:700;margin:0.5rem 0">' + pendingCount + '</div>';
    html += '<div style="font-size:0.95rem;opacity:0.9">Pending</div>';
    html += '</div>';
    
    // Users Card
    html += '<div style="background:linear-gradient(135deg,#ec4899,#db2777);padding:1.8rem;border-radius:12px;text-align:center;color:white;box-shadow:0 4px 15px rgba(236,72,153,0.3)">';
    html += '<div style="font-size:2.8rem;margin-bottom:0.5rem">👥</div>';
    html += '<div style="font-size:2rem;font-weight:700;margin:0.5rem 0">' + totalUsers + '</div>';
    html += '<div style="font-size:0.95rem;opacity:0.9">Users</div>';
    html += '</div>';
    
    // Drivers Card
    html += '<div style="background:linear-gradient(135deg,#14b8a6,#0d9488);padding:1.8rem;border-radius:12px;text-align:center;color:white;box-shadow:0 4px 15px rgba(20,184,166,0.3)">';
    html += '<div style="font-size:2.8rem;margin-bottom:0.5rem">🚗</div>';
    html += '<div style="font-size:2rem;font-weight:700;margin:0.5rem 0">' + totalDrivers + '</div>';
    html += '<div style="font-size:0.95rem;opacity:0.9">Active Drivers</div>';
    html += '</div>';
    
    html += '</div>';
    
    // Management Buttons
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.5rem;margin-bottom:2rem">';
    
    html += '<button onclick="showDriverManagement()" style="padding:2rem;background:linear-gradient(135deg,#10b981,#059669);color:white;border:none;border-radius:12px;font-size:1.05rem;font-weight:700;cursor:pointer;box-shadow:0 4px 15px rgba(16,185,129,0.3);transition:transform 0.2s;display:flex;flex-direction:column;align-items:center;gap:0.8rem">';
    html += '<span style="font-size:2.5rem">🚗</span>';
    html += '<span>Driver Management</span>';
    html += '<span style="font-size:0.85rem;opacity:0.9;font-weight:400">' + totalDrivers + ' drivers registered</span>';
    html += '</button>';
    
    html += '<button onclick="showBankSettings()" style="padding:2rem;background:linear-gradient(135deg,#f59e0b,#d97706);color:white;border:none;border-radius:12px;font-size:1.05rem;font-weight:700;cursor:pointer;box-shadow:0 4px 15px rgba(245,158,11,0.3);transition:transform 0.2s;display:flex;flex-direction:column;align-items:center;gap:0.8rem">';
    html += '<span style="font-size:2.5rem">🏦</span>';
    html += '<span>Bank Settings</span>';
    html += '<span style="font-size:0.85rem;opacity:0.9;font-weight:400">Payment configuration</span>';
    html += '</button>';
    
    html += '<button onclick="viewOwnerDashboard()" style="padding:2rem;background:linear-gradient(135deg,#8b5cf6,#7c3aed);color:white;border:none;border-radius:12px;font-size:1.05rem;font-weight:700;cursor:pointer;box-shadow:0 4px 15px rgba(139,92,246,0.3);transition:transform 0.2s;display:flex;flex-direction:column;align-items:center;gap:0.8rem">';
    html += '<span style="font-size:2.5rem">👨‍💼</span>';
    html += '<span>Restaurant Dashboard</span>';
    html += '<span style="font-size:0.85rem;opacity:0.9;font-weight:400">Order management</span>';
    html += '</button>';
    
    html += '</div>';
    
    // System Status
    html += '<div style="background:rgba(16,185,129,0.1);border:2px solid #10b981;padding:2rem;border-radius:12px;text-align:center">';
    html += '<div style="font-size:3.5rem;margin-bottom:1rem">✅</div>';
    html += '<h3 style="color:#10b981;margin:0 0 0.5rem 0;font-size:1.5rem">Owner Access Active</h3>';
    html += '<p style="color:rgba(255,255,255,0.7);margin:0;font-size:0.95rem">All system features and controls are now available</p>';
    html += '</div>';
    
    // Set content and show
    content.innerHTML = html;
    modal.style.display = 'flex';
    modal.classList.add('active');
}

// DRIVER MANAGEMENT (OWNER)
// ========================================
function showDriverManagement() {
    const content = document.getElementById('ownerContent');
    if (!content) return;
    
    content.innerHTML = `
        <button onclick="showOwnerDashboard()" class="submit-btn" style="margin-bottom: 1rem; background: rgba(139,92,246,0.2); color: #8b5cf6; border: 1px solid #8b5cf6;">
            ← Back
        </button>
        
        <h3 style="color: #fff; margin-bottom: 1rem;">🚗 Driver Management</h3>
        
        <button onclick="generateNewDriverCode()" class="submit-btn" style="margin-bottom: 1.5rem; background: linear-gradient(45deg, #10b981, #059669);">
            ➕ Generate Secret Code
        </button>
        
        <div style="display: grid; gap: 1rem;">
            ${drivers.length === 0 ? '<p style="color: rgba(255,255,255,0.5); text-align: center; padding: 2rem;">No drivers yet. Click "Generate Secret Code" to add one.</p>' : ''}
            ${drivers.map(driver => `
                <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 10px;">
                    <div style="display: grid; gap: 1rem;">
                        <div>
                            <h4 style="margin: 0; color: #fff;">${driver.name || 'Profile Not Created'}</h4>
                            <p style="margin: 0.3rem 0; color: rgba(255,255,255,0.7); font-size: 0.9rem;">
                                ${driver.hasProfile ? driver.email : 'Code: ' + driver.secretCode}
                            </p>
                            <p style="margin: 0; font-size: 0.85rem; color: rgba(255,255,255,0.6);">
                                <span style="color: ${driver.isOnline ? '#10b981' : '#ef4444'};">●</span>
                                ${driver.isOnline ? 'Online' : 'Offline'} | 
                                ${driver.stats.totalDeliveries} deliveries
                            </p>
                        </div>
                        <button onclick="deleteDriverFromList('${driver.id}')" class="submit-btn" style="padding: 0.6rem; background: rgba(239,68,68,0.2); color: #ef4444; border: 1px solid #ef4444;">
                            🗑️ Delete Driver
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function generateNewDriverCode() {
    const code = generateDriverSecretCode();
    const newDriver = {
        id: 'DRV-' + Date.now(),
        secretCode: code,
        name: null,
        email: null,
        password: null,
        phone: null,
        gender: null,
        age: null,
        picture: null,
        status: 'active',
        isOnline: false,
        hasProfile: false,
        stats: {
            totalDeliveries: 0,
            weekDeliveries: 0,
            monthDeliveries: 0,
            averageRating: 0,
            totalRatings: 0,
            ratings: []
        },
        currentLocation: null,
        currentOrder: null,
        createdAt: new Date().toISOString()
    };
    
    drivers.push(newDriver);
    saveDrivers();
    
    alert(`✅ Secret Code Generated!\n\n${code}\n\nGive this code to the new driver.\nThey'll use it once to create their profile.`);
    showDriverManagement();
}

function deleteDriverFromList(driverId) {
    const driver = drivers.find(d => d.id === driverId);
    if (!driver) return;
    
    const name = driver.name || driver.secretCode;
    if (!confirm(`⚠️ Delete driver: ${name}?\n\nThis cannot be undone.`)) return;
    
    drivers = drivers.filter(d => d.id !== driverId);
    saveDrivers();
    showDriverManagement();
    alert('✅ Driver deleted');
}

// ========================================
// DRIVER LOGIN & PROFILE
// ========================================
function showDriverLogin() {
    const modal = document.getElementById('driverLoginModal');
    if (modal) modal.classList.add('active');
}

function handleDriverLogin(event) {
    event.preventDefault();
    var emailOrCode = document.getElementById('driverEmailOrCode').value.trim();
    var password = document.getElementById('driverPassword').value;
    
    console.log('🔐 Driver login attempt:', emailOrCode);
    
    if (!emailOrCode || !password) {
        alert('❌ Please enter email/code and password!');
        return;
    }
    
    // Search in window.driverSystem
    var foundDriver = null;
    var foundId = null;
    
    Object.keys(window.driverSystem.drivers).forEach(function(id) {
        var driver = window.driverSystem.drivers[id];
        if (driver.email === emailOrCode || driver.secretCode === emailOrCode) {
            foundDriver = driver;
            foundId = id;
        }
    });
    
    if (!foundDriver) {
        alert('❌ Driver not found!\n\nPlease check your email or secret code.');
        console.log('❌ No driver found with:', emailOrCode);
        return;
    }
    
    console.log('✅ Driver found:', foundDriver.name);
    
    // Check if active
    if (foundDriver.active === false) {
        alert('❌ Your account is inactive!\n\nPlease contact admin.');
        console.log('❌ Driver inactive:', foundDriver.name);
        return;
    }
    
    // Check password
    if (foundDriver.password !== password) {
        alert('❌ Incorrect password!');
        console.log('❌ Wrong password for:', foundDriver.name);
        return;
    }
    
    // Login successful!
    console.log('✅ Login successful:', foundDriver.name);
    
    // Save driver session
    sessionStorage.setItem('loggedInDriver', foundId);
    sessionStorage.setItem('driverName', foundDriver.name);
    
    // Close login modal
    var modal = document.getElementById('driverLoginModal');
    if (modal) modal.classList.remove('active');
    
    // Also close main auth modal (login/signup)
    var authModal = document.getElementById('authModal');
    if (authModal) authModal.classList.remove('active');
    
    // Clear form
    document.getElementById('driverEmailOrCode').value = '';
    document.getElementById('driverPassword').value = '';
    
    // Update UI to show logged-in state
    updateDriverLoginUI(foundDriver.name);
    
    // Show welcome message
    alert('✅ Login Successful!\n\nWelcome, ' + foundDriver.name + '!');
    
    // Check for pending orders
    setTimeout(function() {
        checkDriverNotifications();
    }, 1500);
}

// Update UI when driver logs in
function updateDriverLoginUI(driverName) {
    // Change account button to show driver name
    var accountBtn = document.querySelector('.icon-btn[onclick="showAccount()"]');
    if (accountBtn) {
        accountBtn.innerHTML = '👤';
        accountBtn.title = 'Driver: ' + driverName;
    }
    
    // Change login button to profile
    var loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.textContent = driverName;
        loginBtn.onclick = function() { showDriverProfile(); };
    }
}

// Show driver's own profile (read-only)
function showDriverProfile() {
    var driverId = sessionStorage.getItem('loggedInDriver');
    if (!driverId) {
        showLogin();
        return;
    }
    
    openDriverProfileReadOnly(driverId);
}

// Open driver profile in read-only mode (for driver login)
function openDriverProfileReadOnly(driverId) {
    var driver = window.driverSystem.get(driverId);
    if (!driver) return;
    
    // Load data into modal
    document.getElementById('viewDriverName').value = driver.name;
    document.getElementById('viewDriverEmail').value = driver.email;
    document.getElementById('viewDriverPhone').value = driver.phone || '';
    document.getElementById('viewDriverDOB').value = driver.dob;
    document.getElementById('viewDriverGender').value = driver.gender;
    document.getElementById('viewDriverDeliveries').textContent = driver.deliveries;
    document.getElementById('viewDriverRating').textContent = '⭐ ' + driver.rating;
    document.getElementById('viewDriverCode').textContent = driver.secretCode;
    
    // Load photo if exists
    var photoIcon = document.getElementById('profilePhotoIcon');
    if (photoIcon) {
        if (driver.photoUrl) {
            photoIcon.innerHTML = '<img src="' + driver.photoUrl + '" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">';
        } else {
            photoIcon.innerHTML = '👤';
        }
    }
    
    // Set active status
    var isActive = driver.active !== false;
    var statusToggle = document.getElementById('driverStatusToggle');
    var statusLabel = document.getElementById('driverStatusLabel');
    
    if (statusToggle && statusLabel) {
        statusToggle.checked = isActive;
        if (isActive) {
            statusLabel.textContent = '✅ Active';
            statusLabel.style.color = '#10b981';
        } else {
            statusLabel.textContent = '❌ Inactive';
            statusLabel.style.color = '#ef4444';
        }
    }
    
    // Store current driver ID (but driver can't edit)
    window.currentEditingDriverId = driverId;
    
    // Set all fields to read-only (driver can only view)
    var fields = ['viewDriverName', 'viewDriverEmail', 'viewDriverPhone', 'viewDriverDOB'];
    fields.forEach(function(id) {
        var el = document.getElementById(id);
        if (el) {
            el.setAttribute('readonly', 'readonly');
            el.style.background = '#2a2a2a';
        }
    });
    
    // Disable gender
    var genderField = document.getElementById('viewDriverGender');
    if (genderField) {
        genderField.setAttribute('disabled', 'disabled');
        genderField.style.background = '#2a2a2a';
    }
    
    // Hide all editing features
    var passwordField = document.getElementById('passwordField');
    if (passwordField) passwordField.style.display = 'none';
    
    var changePhotoBtn = document.getElementById('changePhotoBtn');
    if (changePhotoBtn) changePhotoBtn.style.display = 'none';
    
    var statusContainer = document.getElementById('statusToggleContainer');
    if (statusContainer) statusContainer.style.display = 'none';
    
    var saveBtn = document.getElementById('saveDriverBtn');
    if (saveBtn) saveBtn.style.display = 'none';
    
    // Hide owner-only buttons (Edit/Delete) for driver login
    var ownerBtns = document.getElementById('ownerOnlyButtons');
    if (ownerBtns) ownerBtns.style.display = 'none';
    
    // Show logout button for driver
    var logoutBtn = document.getElementById('driverLogoutBtn');
    if (logoutBtn) logoutBtn.style.display = 'block';
    
    // Show modal
    document.getElementById('driverProfileModal').style.display = 'block';
    
    console.log('✅ Driver profile opened in read-only mode');
}

function createDriverProfile(event) {
    event.preventDefault();
    
    const secretCode = document.getElementById('driverSecretCodeDisplay').textContent;
    const driver = drivers.find(d => d.secretCode === secretCode);
    
    if (!driver) {
        alert('❌ Error: Secret code not found!');
        return;
    }
    
    driver.name = document.getElementById('driverName').value.trim();
    driver.email = document.getElementById('driverEmail').value.trim();
    driver.phone = document.getElementById('driverPhone').value.trim();
    driver.gender = document.getElementById('driverGender').value;
    driver.age = parseInt(document.getElementById('driverAge').value);
    driver.password = document.getElementById('driverNewPassword').value;
    driver.hasProfile = true;
    driver.isOnline = true;
    driver.createdAt = new Date().toISOString();
    
    const existingDriver = drivers.find(d => d.email === driver.email && d.id !== driver.id && d.hasProfile);
    if (existingDriver) {
        alert('❌ This email is already registered!');
        return;
    }
    
    currentDriver = driver;
    saveDrivers();
    
    closeModal('driverProfileModal');
    showDriverDashboard();
    alert(`✅ Profile created!\n\nWelcome to Antalya Shawarma, ${driver.name}!`);
}

function showDriverDashboard() {
    if (!currentDriver) {
        showDriverLogin();
        return;
    }
    
    const modal = document.getElementById('driverDashboardModal');
    const content = document.getElementById('driverDashboardContent');
    if (!modal || !content) return;
    
    const rating = calculateDriverRating(currentDriver);
    const stars = getStarRating(rating);
    
    content.innerHTML = `
        <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; text-align: center;">
            <h3 style="margin: 0 0 0.5rem 0; color: white;">${currentDriver.name}</h3>
            <p style="margin: 0 0 0.3rem 0; color: rgba(255,255,255,0.9); font-size: 1.1rem;">${stars} ${rating}/5</p>
            <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.9rem;">${currentDriver.phone}</p>
            <p style="margin: 0.5rem 0 0 0; color: rgba(255,255,255,0.7); font-size: 0.85rem;">${currentDriver.email}</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(16,185,129,0.1); padding: 1rem; border-radius: 10px; text-align: center;">
                <div style="font-size: 2rem; font-weight: 700; color: #10b981;">${currentDriver.stats.totalDeliveries}</div>
                <div style="color: rgba(255,255,255,0.7); font-size: 0.85rem;">Total</div>
            </div>
            <div style="background: rgba(59,130,246,0.1); padding: 1rem; border-radius: 10px; text-align: center;">
                <div style="font-size: 2rem; font-weight: 700; color: #3b82f6;">${currentDriver.stats.weekDeliveries}</div>
                <div style="color: rgba(255,255,255,0.7); font-size: 0.85rem;">Week</div>
            </div>
            <div style="background: rgba(139,92,246,0.1); padding: 1rem; border-radius: 10px; text-align: center;">
                <div style="font-size: 2rem; font-weight: 700; color: #8b5cf6;">${currentDriver.stats.monthDeliveries}</div>
                <div style="color: rgba(255,255,255,0.7); font-size: 0.85rem;">Month</div>
            </div>
        </div>
        
        <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem;">
            <label style="display: flex; align-items: center; justify-content: center; gap: 1rem; cursor: pointer;">
                <span style="color: #fff;">Status:</span>
                <input type="checkbox" ${currentDriver.isOnline ? 'checked' : ''} onchange="toggleDriverOnline()" style="width: 20px; height: 20px;">
                <span style="color: ${currentDriver.isOnline ? '#10b981' : '#ef4444'}; font-weight: 600;">
                    ${currentDriver.isOnline ? '🟢 Online' : '🔴 Offline'}
                </span>
            </label>
        </div>
        
        <h3 style="color: #fff; margin-bottom: 1rem;">📦 Pending Orders</h3>
        <p style="color: rgba(255,255,255,0.5); text-align: center; padding: 2rem; background: rgba(255,255,255,0.03); border-radius: 10px;">
            No pending orders<br>
            <span style="font-size: 0.85rem;">Orders will appear here when assigned</span>
        </p>
        
        <button onclick="driverLogout()" class="submit-btn" style="width: 100%; margin-top: 1.5rem; background: rgba(255,107,107,0.2); color: #ff6b6b; border: 2px solid #ff6b6b;">
            🚪 Logout
        </button>
    `;
    
    modal.classList.add('active');
}

function toggleDriverOnline() {
    if (!currentDriver) return;
    currentDriver.isOnline = !currentDriver.isOnline;
    saveDrivers();
    showDriverDashboard();
}

function driverLogout() {
    if (!confirm('Logout from driver account?')) return;
    
    if (currentDriver) {
        currentDriver.isOnline = false;
        saveDrivers();
    }
    
    currentDriver = null;
    closeModal('driverDashboardModal');
    alert('✅ Logged out successfully');
}

// View owner dashboard from owner mode (bypass owner check)
function viewOwnerDashboard() {
    const modal = document.getElementById('ownerModal');
    const content = document.getElementById('ownerContent');
    
    const pending = pendingOrders.filter(o => o.status === 'pending');
    const completed = orderHistory.filter(o => o.status === 'completed');
    const totalRevenue = completed.reduce((sum, o) => sum + o.total, 0);
    
    content.innerHTML = `
        <button onclick="showOwnerDashboard()" class="submit-btn" style="margin-bottom: 1rem; background: rgba(139,92,246,0.2); color: #8b5cf6; border: 1px solid #8b5cf6;">
            ← Back to Restaurant Dashboard
        </button>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 1.5rem; border-radius: 12px; text-align: center;">
                <div style="font-size: 2rem; font-weight: 700;">${formatPrice(totalRevenue)}</div>
                <div style="opacity: 0.9;">Total Revenue</div>
            </div>
            <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 1.5rem; border-radius: 12px; text-align: center;">
                <div style="font-size: 2rem; font-weight: 700;">${pending.length}</div>
                <div style="opacity: 0.9;">Pending Orders</div>
            </div>
        </div>
        
        <div style="background: rgba(66,133,244,0.1); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem; border: 1px solid rgba(66,133,244,0.3);">
            <h3 style="color: #6ba3ff; margin-bottom: 1rem;">🏦 Bank Details</h3>
            <div style="display: grid; gap: 0.8rem; color: rgba(255,255,255,0.8); font-size: 0.95rem;">
                <div><strong>Bank:</strong> ${ownerBankDetails.bankName}</div>
                <div><strong>Account:</strong> ${ownerBankDetails.accountNumber}</div>
                <div><strong>Sort Code:</strong> ${ownerBankDetails.sortCode}</div>
                <div><strong>IBAN:</strong> ${ownerBankDetails.iban}</div>
            </div>
        </div>
        
        <h3 style="color: #fff; margin-bottom: 1rem;">📋 Pending Orders (${pending.length})</h3>
        <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
            ${pending.length === 0 ? '<p style="color: rgba(255,255,255,0.5); text-align: center; padding: 2rem;">No pending orders</p>' : ''}
            ${pending.map(order => `
                <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 10px;">
                    <h4 style="margin: 0 0 0.5rem 0; color: #fff;">Order #${order.id.slice(-8)}</h4>
                    <p style="margin: 0.3rem 0; color: rgba(255,255,255,0.8);">Customer: ${order.userName}</p>
                    <p style="margin: 0.3rem 0; color: rgba(255,255,255,0.8);">Total: ${formatPrice(order.total)}</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 1rem;">
                        <button onclick="approveOrder('${order.id}')" class="submit-btn" style="background: linear-gradient(45deg, #10b981, #059669);">
                            ✅ Approve
                        </button>
                        <button onclick="rejectOrder('${order.id}')" class="submit-btn" style="background: linear-gradient(45deg, #ef4444, #dc2626);">
                            ❌ Reject
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.classList.add('active');
}

// ========================================
// OWNER FUNCTIONS
// ========================================

function showSystemAnalytics() {
    const content = document.getElementById('ownerContent');
    
    const completed = orderHistory.filter(o => o.status === 'completed');
    const today = new Date();
    const thisWeek = completed.filter(o => {
        const orderDate = new Date(o.date);
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        return orderDate >= weekAgo;
    });
    const thisMonth = completed.filter(o => {
        const orderDate = new Date(o.date);
        return orderDate.getMonth() === today.getMonth() && orderDate.getFullYear() === today.getFullYear();
    });
    
    const totalRevenue = completed.reduce((sum, o) => sum + o.total, 0);
    const weekRevenue = thisWeek.reduce((sum, o) => sum + o.total, 0);
    const monthRevenue = thisMonth.reduce((sum, o) => sum + o.total, 0);
    
    content.innerHTML = `
        <button onclick="showOwnerDashboard()" class="submit-btn" style="margin-bottom: 1rem; background: rgba(139,92,246,0.2); color: #8b5cf6; border: 1px solid #8b5cf6;">
            ← Back to Dashboard
        </button>
        
        <h2 style="color: #fff; margin-bottom: 1.5rem;">📊 System Analytics</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 1.5rem; border-radius: 12px;">
                <div style="font-size: 0.9rem; opacity: 0.9;">This Week</div>
                <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">${formatPrice(weekRevenue)}</div>
                <div style="font-size: 0.85rem; opacity: 0.8;">${thisWeek.length} orders</div>
            </div>
            <div style="background: linear-gradient(135deg, #3b82f6, #2563eb); padding: 1.5rem; border-radius: 12px;">
                <div style="font-size: 0.9rem; opacity: 0.9;">This Month</div>
                <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">${formatPrice(monthRevenue)}</div>
                <div style="font-size: 0.85rem; opacity: 0.8;">${thisMonth.length} orders</div>
            </div>
            <div style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); padding: 1.5rem; border-radius: 12px;">
                <div style="font-size: 0.9rem; opacity: 0.9;">All Time</div>
                <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">${formatPrice(totalRevenue)}</div>
                <div style="font-size: 0.85rem; opacity: 0.8;">${completed.length} orders</div>
            </div>
        </div>
        
        <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px;">
            <h3 style="color: #fff; margin-bottom: 1rem;">📈 Performance Metrics</h3>
            <div style="display: grid; gap: 1rem;">
                <div style="display: flex; justify-content: space-between; padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 8px;">
                    <span style="color: rgba(255,255,255,0.8);">Average Order Value</span>
                    <span style="color: #10b981; font-weight: 700;">${formatPrice(completed.length > 0 ? totalRevenue / completed.length : 0)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 8px;">
                    <span style="color: rgba(255,255,255,0.8);">Total Customers</span>
                    <span style="color: #3b82f6; font-weight: 700;">${Object.keys(userDatabase).length}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 8px;">
                    <span style="color: rgba(255,255,255,0.8);">Active Drivers</span>
                    <span style="color: #14b8a6; font-weight: 700;">${drivers.filter(d => d.isOnline).length} / ${drivers.length}</span>
                </div>
            </div>
        </div>
    `;
}

function showBankSettings() {
    const content = document.getElementById('ownerContent');
    
    content.innerHTML = `
        <button onclick="showOwnerDashboard()" class="submit-btn" style="margin-bottom: 1rem; background: rgba(139,92,246,0.2); color: #8b5cf6; border: 1px solid #8b5cf6;">
            ← Back to Dashboard
        </button>
        
        <h2 style="color: #fff; margin-bottom: 1.5rem;">🏦 Bank Settings</h2>
        
        <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
            <h3 style="margin: 0 0 1rem 0;">Current Bank Details</h3>
            <div style="display: grid; gap: 1rem; color: rgba(255,255,255,0.95);">
                <div><strong>Bank:</strong> ${ownerBankDetails.bankName}</div>
                <div><strong>Account Number:</strong> ${ownerBankDetails.accountNumber}</div>
                <div><strong>Sort Code:</strong> ${ownerBankDetails.sortCode}</div>
                <div><strong>IBAN:</strong> ${ownerBankDetails.iban}</div>
                <div><strong>Card:</strong> ${ownerBankDetails.cardNumber}</div>
            </div>
        </div>
        
        <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px;">
            <h3 style="color: #fff; margin-bottom: 1rem;">✏️ Edit Bank Details</h3>
            <button onclick="editBankDetails()" class="submit-btn" style="background: linear-gradient(45deg, #10b981, #059669); width: 100%;">
                Update Bank Information
            </button>
        </div>
    `;
}

function viewAllUsers() {
    const content = document.getElementById('ownerContent');
    const users = Object.values(userDatabase);
    
    content.innerHTML = `
        <button onclick="showOwnerDashboard()" class="submit-btn" style="margin-bottom: 1rem; background: rgba(139,92,246,0.2); color: #8b5cf6; border: 1px solid #8b5cf6;">
            ← Back to Dashboard
        </button>
        
        <h2 style="color: #fff; margin-bottom: 1.5rem;">👥 All Users (${users.length})</h2>
        
        <div style="display: grid; gap: 1rem;">
            ${users.length === 0 ? '<p style="color: rgba(255,255,255,0.5); text-align: center; padding: 2rem;">No users registered yet</p>' : ''}
            ${users.map(user => `
                <div style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div>
                            <h4 style="margin: 0; color: #fff;">${user.name}</h4>
                            <p style="margin: 0.3rem 0; color: rgba(255,255,255,0.7);">📧 ${user.email}</p>
                            <p style="margin: 0.3rem 0; color: rgba(255,255,255,0.7);">📞 ${user.phone || 'No phone'}</p>
                            ${user.location ? `<p style="margin: 0.3rem 0; color: rgba(255,255,255,0.6); font-size: 0.85rem;">📍 ${user.location.address}</p>` : ''}
                        </div>
                        <div style="text-align: right;">
                            <div style="background: rgba(16,185,129,0.2); color: #10b981; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">
                                ✓ Verified
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function exportData() {
    const data = {
        users: Object.values(userDatabase),
        orders: orderHistory,
        drivers: drivers,
        revenue: orderHistory.filter(o => o.status === 'completed').reduce((sum, o) => sum + o.total, 0),
        exportDate: new Date().toISOString()
    };
    
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `antalya-shawarma-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    alert('✅ System data exported successfully!');
}

// Owner logout
function ownerLogout() {
    if (confirm('Logout from owner dashboard?')) {
        isOwnerLoggedIn = false;
        isOwnerLoggedIn = false;
        closeModal('ownerModal');
        alert('✅ Logged out successfully');
    }
}

// Owner logout
function ownerLogout() {
    if (confirm('Logout from owner mode?')) {
        isOwnerLoggedIn = false;
        isOwnerLoggedIn = false;
        closeModal('ownerModal');
        alert('✅ Logged out from owner mode');
    }
}

// ========================================
// NEW DRIVER MANAGEMENT SYSTEM
// ========================================

// DRIVER DATA MANAGEMENT SYSTEM
window.driverSystem = {
    drivers: {},
    currentDriverId: null,
    originalData: null,
    nextId: 6, // Start after 5 default drivers
    
    // Add a driver
    add: function(data) {
        var id = 'driver-' + String(this.nextId).padStart(3, '0');
        this.nextId++;
        
        this.drivers[id] = {
            id: id,
            name: data.name,
            email: data.email,
            phone: data.phone || '',
            dob: data.dob,
            gender: data.gender,
            password: data.password || 'default123',
            deliveries: data.deliveries || 0,
            rating: data.rating || 5.0,
            secretCode: data.secretCode,
            photoUrl: data.photoUrl || null,
            active: data.active !== false,
            cardElement: data.cardElement || null
        };
        
        this.save(); // Save to localStorage
        return id;
    },
    
    // Get a driver
    get: function(id) {
        return this.drivers[id];
    },
    
    // Update a driver
    update: function(id, newData) {
        if (!this.drivers[id]) return false;
        
        Object.assign(this.drivers[id], newData);
        this.updateCard(id);
        this.save(); // Save to localStorage
        return true;
    },
    
    // Delete a driver
    delete: function(id) {
        if (!this.drivers[id]) return false;
        
        if (this.drivers[id].cardElement) {
            this.drivers[id].cardElement.remove();
        }
        
        delete this.drivers[id];
        this.updateCounts();
        this.save(); // Save to localStorage
        return true;
    },
    
    // Update card HTML
    updateCard: function(id) {
        var driver = this.drivers[id];
        if (!driver || !driver.cardElement) {
            console.log('Cannot update card - driver or element not found');
            return;
        }
        
        var card = driver.cardElement;
        
        // Rebuild entire card HTML for simplicity
        var statusText = driver.active !== false ? 'Active' : 'Inactive';
        var statusColor = driver.active !== false ? '#10b981' : '#ef4444';
        
        var cardHTML = '';
        cardHTML += '<div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">';
        cardHTML += '<div style="width: 50px; height: 50px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; overflow: hidden;">';
        if (driver.photoUrl) {
            cardHTML += '<img src="' + driver.photoUrl + '" style="width: 100%; height: 100%; object-fit: cover;">';
        } else {
            cardHTML += '🚗';
        }
        cardHTML += '</div>';
        cardHTML += '<div>';
        cardHTML += '<h3 style="color: white; margin: 0; font-size: 1.2rem;">' + driver.name + '</h3>';
        cardHTML += '<p style="color: ' + statusColor + '; margin: 0.25rem 0 0; font-size: 0.9rem;">⭐ ' + statusText + '</p>';
        cardHTML += '</div>';
        cardHTML += '</div>';
        cardHTML += '<div style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-bottom: 1rem;">';
        cardHTML += '<p style="margin: 0.5rem 0;">📧 ' + driver.email + '</p>';
        if (driver.phone) {
            cardHTML += '<p style="margin: 0.5rem 0;">📱 ' + driver.phone + '</p>';
        }
        cardHTML += '<p style="margin: 0.5rem 0;">🎂 ' + driver.dob + '</p>';
        cardHTML += '<p style="margin: 0.5rem 0;">📦 Total Deliveries: ' + driver.deliveries + '</p>';
        cardHTML += '<p style="margin: 0.5rem 0;">⭐ Rating: ' + driver.rating + '/5.0</p>';
        cardHTML += '</div>';
        cardHTML += '<button onclick="openDriverProfile(\'' + id + '\')" style="background: #10b981; color: white; border: none; padding: 0.8rem; border-radius: 8px; width: 100%; cursor: pointer; font-weight: 600;">View Details</button>';
        
        card.innerHTML = cardHTML;
        console.log('✅ Card updated for:', driver.name);
    },
    
    // Update counts
    updateCounts: function() {
        var count = Object.keys(this.drivers).length;
        
        var stat = document.getElementById('driverCountStat');
        if (stat) stat.textContent = count;
        
        var msg = document.getElementById('activeDriversMessage');
        if (msg) msg.textContent = count + ' Active Drivers';
        
        var txt = document.getElementById('driversRegisteredText');
        if (txt) txt.textContent = count + ' drivers registered';
    },
    
    // Save original before edit
    saveOriginal: function(id) {
        this.currentDriverId = id;
        this.originalData = JSON.parse(JSON.stringify(this.drivers[id]));
    },
    
    // Restore on cancel
    restore: function() {
        console.log('🔄 restore() called');
        console.log('Current driver ID:', this.currentDriverId);
        console.log('Has original data:', !!this.originalData);
        
        if (this.currentDriverId && this.originalData) {
            // IMPORTANT: Keep the cardElement reference!
            var cardElement = this.drivers[this.currentDriverId].cardElement;
            
            // Restore the data
            this.drivers[this.currentDriverId] = JSON.parse(JSON.stringify(this.originalData));
            this.drivers[this.currentDriverId].cardElement = cardElement; // Restore card reference
            
            this.updateCard(this.currentDriverId);
            
            // Update modal fields
            document.getElementById('viewDriverName').value = this.originalData.name;
            document.getElementById('viewDriverEmail').value = this.originalData.email;
            document.getElementById('viewDriverDOB').value = this.originalData.dob;
            document.getElementById('viewDriverGender').value = this.originalData.gender;
            
            console.log('✅ Data restored to:', this.originalData.name);
            
            this.originalData = null;
            this.currentDriverId = null;
        } else {
            console.log('⚠️ No data to restore');
        }
        
        // Reset UI to view mode
        if (typeof setViewMode === 'function') {
            setViewMode();
            console.log('✅ setViewMode called');
        }
    },
    
    // Save to localStorage
    save: function() {
        var dataToSave = {};
        Object.keys(this.drivers).forEach(function(id) {
            var driver = this.drivers[id];
            dataToSave[id] = {
                id: driver.id,
                name: driver.name,
                email: driver.email,
                phone: driver.phone,
                dob: driver.dob,
                gender: driver.gender,
                password: driver.password,
                deliveries: driver.deliveries,
                rating: driver.rating,
                secretCode: driver.secretCode,
                photoUrl: driver.photoUrl,
                active: driver.active
            };
        }.bind(this));
        
        localStorage.setItem('driverSystemData', JSON.stringify(dataToSave));
        localStorage.setItem('driverSystemNextId', this.nextId);
        console.log('✅ Driver data saved to localStorage');
    },
    
    // Load from localStorage
    load: function() {
        var savedData = localStorage.getItem('driverSystemData');
        var savedNextId = localStorage.getItem('driverSystemNextId');
        
        if (savedData) {
            try {
                var driversData = JSON.parse(savedData);
                console.log('📦 Loading ' + Object.keys(driversData).length + ' drivers from localStorage');
                
                // Merge with existing drivers (to keep cardElement references)
                Object.keys(driversData).forEach(function(id) {
                    if (this.drivers[id]) {
                        // Update existing driver, keep cardElement
                        var cardElement = this.drivers[id].cardElement;
                        this.drivers[id] = driversData[id];
                        this.drivers[id].cardElement = cardElement;
                    } else {
                        // New driver from storage
                        this.drivers[id] = driversData[id];
                    }
                }.bind(this));
            } catch (e) {
                console.error('❌ Error loading driver data:', e);
            }
        }
        
        if (savedNextId) {
            this.nextId = parseInt(savedNextId);
        }
    }
};

// PROFILE MODAL FUNCTIONS
function openDriverProfile(driverId) {
    var driver = window.driverSystem.get(driverId);
    if (!driver) return;
    
    // Load data into modal
    document.getElementById('viewDriverName').value = driver.name;
    document.getElementById('viewDriverEmail').value = driver.email;
    document.getElementById('viewDriverPhone').value = driver.phone || '';
    document.getElementById('viewDriverDOB').value = driver.dob;
    document.getElementById('viewDriverGender').value = driver.gender;
    document.getElementById('viewDriverDeliveries').textContent = driver.deliveries;
    document.getElementById('viewDriverRating').textContent = '⭐ ' + driver.rating;
    document.getElementById('viewDriverCode').textContent = driver.secretCode;
    
    // Load photo if exists
    var photoIcon = document.getElementById('profilePhotoIcon');
    if (photoIcon) {
        if (driver.photoUrl) {
            photoIcon.innerHTML = '<img src="' + driver.photoUrl + '" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">';
            console.log('✅ Photo loaded from driver data');
        } else {
            photoIcon.innerHTML = '👤';
        }
    }
    
    // Set active status
    var isActive = driver.active !== false; // Default to true if not set
    var statusToggle = document.getElementById('driverStatusToggle');
    var statusLabel = document.getElementById('driverStatusLabel');
    
    if (statusToggle && statusLabel) {
        statusToggle.checked = isActive;
        if (isActive) {
            statusLabel.textContent = '✅ Active';
            statusLabel.style.color = '#10b981';
        } else {
            statusLabel.textContent = '❌ Inactive';
            statusLabel.style.color = '#ef4444';
        }
    }
    
    // Store current driver ID
    window.currentEditingDriverId = driverId;
    
    // Reset to view mode
    setViewMode();
    
    // Show modal
    document.getElementById('driverProfileModal').style.display = 'block';
}

function setViewMode() {
    console.log('🔧 setViewMode called');
    var fields = ['viewDriverName', 'viewDriverEmail', 'viewDriverPhone', 'viewDriverDOB'];
    fields.forEach(function(id) {
        var el = document.getElementById(id);
        if (el) {
            el.setAttribute('readonly', 'readonly');
            el.style.background = '#2a2a2a';
            console.log('✅ Reset field:', id);
        }
    });
    
    // Reset gender
    var genderField = document.getElementById('viewDriverGender');
    if (genderField) {
        genderField.setAttribute('disabled', 'disabled');
        genderField.style.background = '#2a2a2a';
    }
    
    // Hide password field
    var passwordField = document.getElementById('passwordField');
    if (passwordField) {
        passwordField.style.display = 'none';
        document.getElementById('viewDriverPassword').value = '';
    }
    
    // Hide change photo button
    var changePhotoBtn = document.getElementById('changePhotoBtn');
    if (changePhotoBtn) changePhotoBtn.style.display = 'none';
    
    // Hide status toggle
    var statusContainer = document.getElementById('statusToggleContainer');
    if (statusContainer) statusContainer.style.display = 'none';
    
    var editBtn = document.getElementById('editDriverBtn');
    var saveBtn = document.getElementById('saveDriverBtn');
    
    if (editBtn) {
        editBtn.textContent = '✏️ Edit Profile';
        editBtn.style.background = 'linear-gradient(45deg, #3b82f6, #2563eb)';
        console.log('✅ Edit button reset');
    }
    
    if (saveBtn) {
        saveBtn.style.display = 'none';
        console.log('✅ Save button hidden');
    }
    
    // Show owner-only buttons (Edit/Delete) for owner access
    var ownerBtns = document.getElementById('ownerOnlyButtons');
    if (ownerBtns) ownerBtns.style.display = 'grid';
    
    // Hide driver logout button for owner
    var logoutBtn = document.getElementById('driverLogoutBtn');
    if (logoutBtn) logoutBtn.style.display = 'none';
    
    console.log('✅ setViewMode complete');
}

function toggleEditMode() {
    var editBtn = document.getElementById('editDriverBtn');
    var saveBtn = document.getElementById('saveDriverBtn');
    var fields = ['viewDriverName', 'viewDriverEmail', 'viewDriverPhone', 'viewDriverDOB'];
    var genderField = document.getElementById('viewDriverGender');
    var passwordField = document.getElementById('passwordField');
    var changePhotoBtn = document.getElementById('changePhotoBtn');
    var statusContainer = document.getElementById('statusToggleContainer');
    
    console.log('🔧 toggleEditMode - Button text:', editBtn.textContent);
    
    if (editBtn.textContent.includes('Edit')) {
        console.log('📝 Entering edit mode for driver:', window.currentEditingDriverId);
        // Save original data
        window.driverSystem.saveOriginal(window.currentEditingDriverId);
        
        // Enable editing
        fields.forEach(function(id) {
            var el = document.getElementById(id);
            if (el) {
                el.removeAttribute('readonly');
                el.style.background = '#3a3a3a';
            }
        });
        
        // Enable gender select
        if (genderField) {
            genderField.removeAttribute('disabled');
            genderField.style.background = '#3a3a3a';
        }
        
        // Show password field
        if (passwordField) passwordField.style.display = 'block';
        
        // Show change photo button
        if (changePhotoBtn) changePhotoBtn.style.display = 'block';
        
        // Show status toggle
        if (statusContainer) {
            statusContainer.style.display = 'block';
            console.log('✅ Status toggle shown');
        }
        
        editBtn.textContent = '❌ Cancel';
        editBtn.style.background = '#6b7280';
        saveBtn.style.display = 'block';
        console.log('✅ Edit mode enabled');
    } else {
        console.log('❌ Canceling edit mode');
        // Cancel - restore original
        window.driverSystem.restore();
        console.log('✅ Data restored, calling setViewMode');
        setViewMode();
        console.log('✅ Cancel complete');
    }
}

function saveDriverChanges() {
    var id = window.currentEditingDriverId;
    if (!id) return;
    
    var newData = {
        name: document.getElementById('viewDriverName').value,
        email: document.getElementById('viewDriverEmail').value,
        phone: document.getElementById('viewDriverPhone').value,
        dob: document.getElementById('viewDriverDOB').value,
        gender: document.getElementById('viewDriverGender').value
    };
    
    if (!newData.name || !newData.email || !newData.phone || !newData.dob || !newData.gender) {
        alert('❌ Please fill all required fields!');
        return;
    }
    
    // Check for duplicate email (if changed)
    var currentDriver = window.driverSystem.get(id);
    if (newData.email !== currentDriver.email) {
        var emailExists = false;
        Object.keys(window.driverSystem.drivers).forEach(function(did) {
            if (did !== id && window.driverSystem.drivers[did].email === newData.email) {
                emailExists = true;
            }
        });
        
        if (emailExists) {
            alert('❌ Email already exists!\n\nPlease use a different email address.');
            return;
        }
    }
    
    // Check for duplicate phone (if changed)
    if (newData.phone !== currentDriver.phone) {
        var phoneExists = false;
        Object.keys(window.driverSystem.drivers).forEach(function(did) {
            if (did !== id && window.driverSystem.drivers[did].phone === newData.phone) {
                phoneExists = true;
            }
        });
        
        if (phoneExists) {
            alert('❌ Phone number already exists!\n\nPlease use a different phone number.');
            return;
        }
    }
    
    // Get password if changed
    var newPassword = document.getElementById('viewDriverPassword').value;
    if (newPassword) {
        if (newPassword.length < 6) {
            alert('❌ Password must be at least 6 characters!');
            return;
        }
        newData.password = newPassword;
    }
    
    // Get active status
    var isActive = document.getElementById('driverStatusToggle').checked;
    newData.active = isActive;
    
    // Generate smart secret code from name
    var nameparts = newData.name.trim().split(' ');
    var initials = '';
    for (var i = 0; i < nameparts.length && initials.length < 4; i++) {
        if (nameparts[i].length > 0) {
            initials += nameparts[i][0].toUpperCase();
        }
    }
    
    // Get driver position number from ID
    var idMatch = id.match(/driver-(\d+)/);
    var position = idMatch ? idMatch[1] : '001';
    
    newData.secretCode = 'DRV' + position + initials;
    
    // Update driver in system
    window.driverSystem.update(id, newData);
    
    // Update secret code display
    document.getElementById('viewDriverCode').textContent = newData.secretCode;
    
    // Show success
    var msg = '✅ Changes saved successfully!\n\n';
    msg += 'Name: ' + newData.name + '\n';
    msg += 'Email: ' + newData.email + '\n';
    msg += 'Phone: ' + newData.phone + '\n';
    msg += 'Gender: ' + newData.gender + '\n';
    msg += 'DOB: ' + newData.dob + '\n';
    if (newPassword) msg += 'Password: Updated ✅\n';
    msg += 'Status: ' + (isActive ? 'Active' : 'Inactive') + '\n';
    msg += 'Secret Code: ' + newData.secretCode;
    
    alert(msg);
    
    // Return to view mode
    setViewMode();
}

function deleteDriver() {
    var id = window.currentEditingDriverId;
    if (!id) return;
    
    if (confirm('⚠️ DELETE DRIVER?\n\nAre you sure you want to permanently delete this driver?\n\nThis action cannot be undone!')) {
        window.driverSystem.delete(id);
        alert('✅ Driver deleted successfully!');
        document.getElementById('driverProfileModal').style.display = 'none';
    }
}

console.log('✅ New driver system loaded from script.js');
// Initialize default drivers when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        console.log('🚀 Initializing driver system...');
        
        // Get all driver cards
        var cards = document.querySelectorAll('#driverCardsContainer > div');
        
        // Default drivers data
        var defaultDrivers = [
            {id: 'driver-001', name: 'Mohammed Ali', email: 'mohammed.ali@antalya.com', dob: '1990-03-15', gender: 'Male', deliveries: 247, rating: 4.9, secretCode: 'DRV001MOHA'},
            {id: 'driver-002', name: 'Ahmed Hassan', email: 'ahmed.hassan@antalya.com', dob: '1992-07-22', gender: 'Male', deliveries: 189, rating: 4.8, secretCode: 'DRV002AHME'},
            {id: 'driver-003', name: 'Omar Khan', email: 'omar.khan@antalya.com', dob: '1988-11-10', gender: 'Male', deliveries: 312, rating: 5.0, secretCode: 'DRV003OMAR'},
            {id: 'driver-004', name: 'Yusuf Ibrahim', email: 'yusuf.ibrahim@antalya.com', dob: '1995-05-18', gender: 'Male', deliveries: 156, rating: 4.7, secretCode: 'DRV004YUSF'},
            {id: 'driver-005', name: 'Tariq Mansoor', email: 'tariq.mansoor@antalya.com', dob: '1991-09-25', gender: 'Male', deliveries: 203, rating: 4.9, secretCode: 'DRV005TARQ'}
        ];
        
        // Register default cards
        cards.forEach(function(card, index) {
            if (defaultDrivers[index]) {
                var data = defaultDrivers[index];
                data.cardElement = card;
                card.setAttribute('data-driver-id', data.id);
                window.driverSystem.drivers[data.id] = data;
            }
        });
        
        // Load from localStorage
        var savedData = localStorage.getItem('driverSystemData');
        if (savedData) {
            try {
                var driversData = JSON.parse(savedData);
                console.log('📦 Loading ' + Object.keys(driversData).length + ' drivers from localStorage...');
                
                // Check each saved driver
                Object.keys(driversData).forEach(function(id) {
                    var driver = driversData[id];
                    
                    // Check if card exists in DOM
                    var card = document.querySelector('[data-driver-id="' + id + '"]');
                    
                    if (card) {
                        // Card exists (default driver), update data
                        driver.cardElement = card;
                        window.driverSystem.drivers[id] = driver;
                        window.driverSystem.updateCard(id);
                        console.log('✅ Updated existing driver: ' + driver.name);
                    } else if (id.match(/^driver-00[1-5]$/)) {
                        // Default driver that was deleted (driver-001 through driver-005)
                        console.log('🗑️ Default driver was deleted: ' + id);
                        // Don't add to system
                    } else {
                        // New driver (driver-006+), rebuild card
                        console.log('🆕 Rebuilding card for: ' + driver.name);
                        var newCard = rebuildDriverCard(driver);
                        if (newCard) {
                            driver.cardElement = newCard;
                            window.driverSystem.drivers[id] = driver;
                            console.log('✅ Rebuilt driver: ' + driver.name);
                        }
                    }
                });
                
                // Remove cards for deleted default drivers
                defaultDrivers.forEach(function(defaultDriver) {
                    if (!driversData[defaultDriver.id]) {
                        var card = document.querySelector('[data-driver-id="' + defaultDriver.id + '"]');
                        if (card) {
                            card.remove();
                            console.log('🗑️ Removed deleted driver card: ' + defaultDriver.name);
                        }
                        delete window.driverSystem.drivers[defaultDriver.id];
                    }
                });
                
            } catch (e) {
                console.error('❌ Error loading driver data:', e);
            }
        }
        
        // Update nextId from localStorage
        var savedNextId = localStorage.getItem('driverSystemNextId');
        if (savedNextId) {
            window.driverSystem.nextId = parseInt(savedNextId);
            console.log('📊 Next driver ID will be: driver-' + String(window.driverSystem.nextId).padStart(3, '0'));
        }
        
        window.driverSystem.updateCounts();
        console.log('✅ System initialized with ' + Object.keys(window.driverSystem.drivers).length + ' drivers');
    }, 100);
});


// Rebuild a driver card from data (for newly added drivers after page reload)
function rebuildDriverCard(driver) {
    var container = document.getElementById('driverCardsContainer');
    if (!container) return null;
    
    var newCard = document.createElement('div');
    newCard.style.cssText = 'background: #1a1a1a; padding: 2rem; border-radius: 15px; border: 2px solid #10b981; box-shadow: 0 4px 20px rgba(16,185,129,0.2);';
    newCard.setAttribute('data-driver-id', driver.id);
    
    var statusText = driver.active !== false ? 'Active' : 'Inactive';
    var statusColor = driver.active !== false ? '#10b981' : '#ef4444';
    
    var cardHTML = '';
    cardHTML += '<div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">';
    cardHTML += '<div style="width: 50px; height: 50px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; overflow: hidden;">';
    if (driver.photoUrl) {
        cardHTML += '<img src="' + driver.photoUrl + '" style="width: 100%; height: 100%; object-fit: cover;">';
    } else {
        cardHTML += '🚗';
    }
    cardHTML += '</div>';
    cardHTML += '<div>';
    cardHTML += '<h3 style="color: white; margin: 0; font-size: 1.2rem;">' + driver.name + '</h3>';
    cardHTML += '<p style="color: ' + statusColor + '; margin: 0.25rem 0 0; font-size: 0.9rem;">⭐ ' + statusText + '</p>';
    cardHTML += '</div>';
    cardHTML += '</div>';
    cardHTML += '<div style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-bottom: 1rem;">';
    cardHTML += '<p style="margin: 0.5rem 0;">📧 ' + driver.email + '</p>';
    if (driver.phone) {
        cardHTML += '<p style="margin: 0.5rem 0;">📱 ' + driver.phone + '</p>';
    }
    cardHTML += '<p style="margin: 0.5rem 0;">🎂 ' + driver.dob + '</p>';
    cardHTML += '<p style="margin: 0.5rem 0;">📦 Total Deliveries: ' + (driver.deliveries || 0) + '</p>';
    cardHTML += '<p style="margin: 0.5rem 0;">⭐ Rating: ' + (driver.rating || 5.0) + '/5.0</p>';
    cardHTML += '</div>';
    cardHTML += '<button onclick="openDriverProfile(\'' + driver.id + '\')" style="background: #10b981; color: white; border: none; padding: 0.8rem; border-radius: 8px; width: 100%; cursor: pointer; font-weight: 600;">View Details</button>';
    
    newCard.innerHTML = cardHTML;
    container.insertBefore(newCard, container.firstChild);
    
    return newCard;
}

// Handle Add New Driver button

function handleAddNewDriver() {
    var name = document.getElementById('newDriverName').value.trim();
    var dob = document.getElementById('newDriverDOB').value;
    var gender = document.getElementById('newDriverGender').value;
    var email = document.getElementById('newDriverEmail').value.trim();
    var phone = document.getElementById('newDriverPhone').value.trim();
    var password = document.getElementById('newDriverPassword').value;
    
    if (!name || !dob || !gender || !email || !phone || !password) {
        alert('❌ Please fill all required fields!');
        return;
    }
    
    console.log('🆕 Adding new driver:', name);
    
    // Check for duplicate email
    var emailExists = false;
    Object.keys(window.driverSystem.drivers).forEach(function(id) {
        if (window.driverSystem.drivers[id].email === email) {
            emailExists = true;
        }
    });
    
    if (emailExists) {
        alert('❌ Email already exists!\n\nPlease use a different email address.');
        return;
    }
    
    // Check for duplicate phone
    var phoneExists = false;
    Object.keys(window.driverSystem.drivers).forEach(function(id) {
        if (window.driverSystem.drivers[id].phone === phone) {
            phoneExists = true;
        }
    });
    
    if (phoneExists) {
        alert('❌ Phone number already exists!\n\nPlease use a different phone number.');
        return;
    }
    
    // Get photo if uploaded
    var photoFile = document.getElementById('newDriverPicture').files[0];
    
    var processDriver = function(photoData) {
        // Generate smart secret code
        var nameparts = name.split(' ');
        var initials = '';
        for (var i = 0; i < nameparts.length && initials.length < 4; i++) {
            if (nameparts[i].length > 0) {
                initials += nameparts[i][0].toUpperCase();
            }
        }
        
        var position = String(window.driverSystem.nextId).padStart(3, '0');
        var secretCode = 'DRV' + position + initials;
        
        // Create container for new card
        var container = document.getElementById('driverCardsContainer');
        var newCard = document.createElement('div');
        newCard.style.cssText = 'background: #1a1a1a; padding: 2rem; border-radius: 15px; border: 2px solid #10b981; box-shadow: 0 4px 20px rgba(16,185,129,0.2);';
        
        // Add driver to system
        var driverId = window.driverSystem.add({
            name: name,
            email: email,
            phone: phone,
            dob: dob,
            gender: gender,
            password: password,
            secretCode: secretCode,
            photoUrl: photoData,
            active: true,
            deliveries: 0,
            rating: 5.0,
            cardElement: newCard
        });
        
        var cardHTML = '';
        cardHTML += '<div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">';
        cardHTML += '<div style="width: 50px; height: 50px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; overflow: hidden;">';
        if (photoData) {
            cardHTML += '<img src="' + photoData + '" style="width: 100%; height: 100%; object-fit: cover;">';
        } else {
            cardHTML += '🚗';
        }
        cardHTML += '</div>';
        cardHTML += '<div>';
        cardHTML += '<h3 style="color: white; margin: 0; font-size: 1.2rem;">' + name + '</h3>';
        cardHTML += '<p style="color: #10b981; margin: 0.25rem 0 0; font-size: 0.9rem;">⭐ Active</p>';
        cardHTML += '</div>';
        cardHTML += '</div>';
        cardHTML += '<div style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-bottom: 1rem;">';
        cardHTML += '<p style="margin: 0.5rem 0;">📧 ' + email + '</p>';
        cardHTML += '<p style="margin: 0.5rem 0;">📱 ' + phone + '</p>';
        cardHTML += '<p style="margin: 0.5rem 0;">🎂 ' + dob + '</p>';
        cardHTML += '<p style="margin: 0.5rem 0;">📦 Total Deliveries: 0</p>';
        cardHTML += '<p style="margin: 0.5rem 0;">⭐ Rating: 5.0/5.0</p>';
        cardHTML += '</div>';
        cardHTML += '<button onclick="openDriverProfile(\'' + driverId + '\')" style="background: #10b981; color: white; border: none; padding: 0.8rem; border-radius: 8px; width: 100%; cursor: pointer; font-weight: 600;">View Details</button>';
        
        newCard.innerHTML = cardHTML;
        newCard.setAttribute('data-driver-id', driverId);
        container.insertBefore(newCard, container.firstChild);
        
        // Update counts
        window.driverSystem.updateCounts();
        
        // Show success
        alert('✅ Driver Added Successfully!\n\n🔐 SECRET CODE: ' + secretCode + '\n📧 Email: ' + email + '\n📱 Phone: ' + phone + '\n\nGive this code to the driver.');
        
        // Clear form
        document.getElementById('newDriverName').value = '';
        document.getElementById('newDriverDOB').value = '';
        document.getElementById('newDriverGender').value = '';
        document.getElementById('newDriverEmail').value = '';
        document.getElementById('newDriverPhone').value = '';
        document.getElementById('newDriverPassword').value = '';
        document.getElementById('newDriverPicture').value = '';
        
        // Close modal
        document.getElementById('addDriverModal').style.display = 'none';
        
        console.log('✅ Driver added successfully:', driverId);
    };
    
    // Process photo if uploaded
    if (photoFile) {
        console.log('📸 Processing photo upload...');
        var reader = new FileReader();
        reader.onload = function(e) {
            console.log('✅ Photo loaded');
            processDriver(e.target.result);
        };
        reader.readAsDataURL(photoFile);
    } else {
        processDriver(null);
    }
}
console.log('✅ handleAddNewDriver function loaded');

// Handle profile photo upload
document.addEventListener('DOMContentLoaded', function() {
    var photoInput = document.getElementById('profilePhotoInput');
    if (photoInput) {
        photoInput.addEventListener('change', function(e) {
            var file = e.target.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function(event) {
                    var base64 = event.target.result;
                    
                    // Update the photo icon to show image
                    var photoIcon = document.getElementById('profilePhotoIcon');
                    if (photoIcon) {
                        photoIcon.innerHTML = '<img src="' + base64 + '" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">';
                    }
                    
                    // Store in current driver
                    if (window.currentEditingDriverId) {
                        var driver = window.driverSystem.get(window.currentEditingDriverId);
                        if (driver) {
                            driver.photoUrl = base64;
                            window.driverSystem.save();
                            console.log('📸 Photo uploaded and saved');
                        }
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

console.log('✅ Photo upload handler loaded');

// Toggle map fullscreen (for mobile)

// Get user's current location
function getCurrentLocation() {
    if (!navigator.geolocation) {
        alert('❌ Geolocation is not supported by your browser');
        return;
    }
    
    const btn = event.target.closest('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span style="font-size: 1.2rem;">⏳</span> <span>Getting location...</span>';
    btn.disabled = true;
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const location = { lat: lat, lng: lng };
            
            console.log('📍 Current location:', lat, lng);
            
            if (googleMap) {
                googleMap.setCenter(location);
                googleMap.setZoom(16);
                addMarker(location);
            } else {
                // Fallback
                selectedLocation = location;
                document.getElementById('selectedLocationText').textContent = 
                    '📍 ' + lat.toFixed(6) + ', ' + lng.toFixed(6);
            }
            
            btn.innerHTML = originalText;
            btn.disabled = false;
            alert('✅ Location found!');
        },
        (error) => {
            console.error('Location error:', error);
            btn.innerHTML = originalText;
            btn.disabled = false;
            
            let msg = '❌ Could not get location\n\n';
            if (error.code === 1) msg += 'Please allow location access in your browser';
            else if (error.code === 2) msg += 'Location unavailable';
            else msg += 'Timeout - please try again';
            
            alert(msg);
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

// Logout driver
function logoutDriver() {
    if (!confirm('Are you sure you want to logout?')) return;
    
    sessionStorage.removeItem('loggedInDriver');
    sessionStorage.removeItem('driverName');
    
    // Close profile
    document.getElementById('driverProfileModal').style.display = 'none';
    
    // Reset UI
    var loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.textContent = 'Login';
        loginBtn.onclick = function() { showLogin(); };
    }
    
    alert('✅ Logged out successfully');
    console.log('✅ Driver logged out');
}

// Restore driver session on page load
window.addEventListener('DOMContentLoaded', function() {
    var driverId = sessionStorage.getItem('loggedInDriver');
    var driverName = sessionStorage.getItem('driverName');
    
    if (driverId && driverName) {
        console.log('✅ Restoring driver session:', driverName);
        updateDriverLoginUI(driverName);
        
        // Check for notifications
        setTimeout(function() {
            checkDriverNotifications();
        }, 2000);
    }
});

// DRIVER ORDER ACCEPTANCE SYSTEM

// Global order notification state
window.driverOrderNotifications = [];

// Send order to all active drivers
function sendOrderToDrivers(orderId, orderDetails) {
    // Get all active drivers
    var activeDrivers = Object.keys(window.driverSystem.drivers).filter(function(id) {
        return window.driverSystem.drivers[id].active !== false;
    });
    
    if (activeDrivers.length === 0) {
        alert('❌ No active drivers available!');
        return;
    }
    
    // Create notification for all drivers
    var notification = {
        orderId: orderId,
        destination: orderDetails.address,
        items: orderDetails.items,
        total: orderDetails.total,
        timestamp: new Date().toISOString(),
        acceptedBy: null
    };
    
    // Store in sessionStorage so drivers can see it
    var notifications = JSON.parse(sessionStorage.getItem('driverNotifications') || '[]');
    notifications.push(notification);
    sessionStorage.setItem('driverNotifications', JSON.stringify(notifications));
    
    alert('✅ Order sent to ' + activeDrivers.length + ' active driver(s)!\n\nOrder ID: ' + orderId + '\nDestination: ' + orderDetails.address);
    console.log('📣 Order notification sent to drivers');
}

// Check for notifications (called when driver logs in or refreshes)
function checkDriverNotifications() {
    var driverId = sessionStorage.getItem('loggedInDriver');
    if (!driverId) return;
    
    var notifications = JSON.parse(sessionStorage.getItem('driverNotifications') || '[]');
    var unaccepted = notifications.filter(function(n) { return !n.acceptedBy; });
    
    if (unaccepted.length > 0) {
        // Update notification badge
        var badge = document.getElementById('notificationBadge');
        if (badge) badge.textContent = unaccepted.length;
        
        // Show alert for first unaccepted order
        var order = unaccepted[0];
        setTimeout(function() {
            var accept = confirm(
                '🚗 NEW ORDER READY FOR PICKUP!\n\n' +
                'Order ID: ' + order.orderId + '\n' +
                'Destination: ' + order.destination + '\n' +
                'Total: £' + order.total.toFixed(2) + '\n\n' +
                'Do you want to accept this delivery?'
            );
            
            if (accept) {
                acceptDriverOrder(order.orderId, driverId);
            }
        }, 1000);
    }
}

// Accept order
function acceptDriverOrder(orderId, driverId) {
    var notifications = JSON.parse(sessionStorage.getItem('driverNotifications') || '[]');
    var order = notifications.find(function(n) { return n.orderId === orderId; });
    
    if (!order) {
        alert('❌ Order not found!');
        return;
    }
    
    if (order.acceptedBy) {
        alert('❌ Order already accepted by another driver!');
        return;
    }
    
    // Mark as accepted
    order.acceptedBy = driverId;
    sessionStorage.setItem('driverNotifications', JSON.stringify(notifications));
    
    // Update badge
    var badge = document.getElementById('notificationBadge');
    var unaccepted = notifications.filter(function(n) { return !n.acceptedBy; }).length;
    if (badge) badge.textContent = unaccepted;
    
    // Get driver name
    var driver = window.driverSystem.get(driverId);
    var driverName = driver ? driver.name : 'Unknown';
    
    alert('✅ Order Accepted!\n\nOrder ID: ' + orderId + '\nDestination: ' + order.destination + '\n\nPlease proceed to pickup location.');
    console.log('✅ Order ' + orderId + ' accepted by ' + driverName);
}

// Show notifications modal
function showDriverNotifications() {
    var driverId = sessionStorage.getItem('loggedInDriver');
    if (!driverId) {
        showLogin();
        return;
    }
    
    var notifications = JSON.parse(sessionStorage.getItem('driverNotifications') || '[]');
    var html = '<h2>📦 Delivery Orders</h2><div style="max-height: 400px; overflow-y: auto;">';
    
    if (notifications.length === 0) {
        html += '<p style="text-align: center; padding: 2rem; color: rgba(255,255,255,0.5);">No orders available</p>';
    } else {
        notifications.forEach(function(order) {
            var accepted = order.acceptedBy === driverId;
            var acceptedByOther = order.acceptedBy && order.acceptedBy !== driverId;
            
            html += '<div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">';
            html += '<div style="font-weight: 600; margin-bottom: 0.5rem;">Order #' + order.orderId + '</div>';
            html += '<div style="font-size: 0.9rem; color: rgba(255,255,255,0.7);">';
            html += '📍 ' + order.destination + '<br>';
            html += '💰 £' + order.total.toFixed(2) + '<br>';
            
            if (accepted) {
                html += '<div style="color: #10b981; margin-top: 0.5rem;">✅ Accepted by you</div>';
            } else if (acceptedByOther) {
                html += '<div style="color: #ef4444; margin-top: 0.5rem;">❌ Accepted by another driver</div>';
            } else {
                html += '<button onclick="acceptDriverOrder(\'' + order.orderId + '\', \'' + driverId + '\'); showDriverNotifications();" style="margin-top: 0.5rem; background: #10b981; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">Accept Order</button>';
            }
            
            html += '</div></div>';
        });
    }
    
    html += '</div>';
    
    // Show in a modal
    alert(html.replace(/<[^>]*>/g, '\n')); // Temporary - should use proper modal
}

