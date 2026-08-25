// ===== DATA =====
const hamburguers = [
    { id: 'h1', name: 'X Salada', price: 30.00, desc: 'Pão brioche, hambúrguer 180g, alface, tomate, cebola e maionese especial', img: 'imagens/Hamburguer 1.jpg' },
    { id: 'h2', name: 'Black Barbecue', price: 32.00, desc: 'Pão, 1 hambúrguer, creme de queijo, cebola caramelizada e molho barbecue', img: 'imagens/Hamburguer 2.jpg' },
    { id: 'h3', name: 'White Burger', price: 32.00, desc: 'Pão branco, hambúrguer 180g, queijo prato, alface e molho branco', img: 'imagens/Hamburguer 3.jpg' },
    { id: 'h4', name: 'Caipira', price: 33.00, desc: 'Pão artesanal, hambúrguer 200g, queijo coalho, bacon e molho da casa', img: 'imagens/Hamburguer 4.jpg' },
    { id: 'h5', name: 'Chiking', price: 35.00, desc: 'Pão brioche, frango empanado crocante, alface, tomate e molho ranch', img: 'imagens/Hamburguer 5.jpg' },
    { id: 'h6', name: 'Tradicional', price: 28.00, desc: 'Pão clássico, hambúrguer 150g, queijo cheddar, picles e ketchup', img: 'imagens/Hamburguer 6.jpg' }
];

const bebidas = [
    { id: 'b1', name: 'Coca-Cola', price: 7.00, desc: 'Lata 350ml gelada', img: 'imagens/Coca-cola.jpg' },
    { id: 'b2', name: 'Pepsi', price: 7.00, desc: 'Lata 350ml gelada', img: 'imagens/pepsi.jpg' },
    { id: 'b3', name: 'Guaraná', price: 7.00, desc: 'Lata 350ml gelada', img: 'imagens/guarana.jpg' },
    { id: 'b4', name: 'Suco de Laranja', price: 12.00, desc: 'Natural, 400ml', img: 'imagens/suco-laranja.jpg' },
    { id: 'b5', name: 'Suco de Uva', price: 12.00, desc: 'Natural, 400ml', img: 'imagens/suco-uva.jpg' },
    { id: 'b6', name: 'Suco de Maracujá', price: 12.00, desc: 'Natural, 400ml', img: 'imagens/suco-maracuja.jpg' },
    { id: 'b7', name: 'Água', price: 4.00, desc: 'Mineral sem gás, 500ml', img: 'imagens/agua.jpg' }
];

const combos = [
    { id: 'c1', name: 'Combo Clássico', price: 29.90, oldPrice: 37.00, desc: 'Hambúrguer X Salada + Coca-Cola + Batata Frita Média', img: 'imagens/Combo 1.jpg', items: ['X Salada', 'Coca-Cola'] },
    { id: 'c2', name: 'Combo Black BBQ', price: 34.90, oldPrice: 42.00, desc: 'Black Barbecue + Guaraná + Onion Rings', img: 'imagens/Combo 2.jpg', items: ['Black Barbecue', 'Guaraná'] },
    { id: 'c3', name: 'Combo White', price: 34.90, oldPrice: 42.00, desc: 'White Burger + Pepsi + Batata Frita Grande', img: 'imagens/Combo 3.jpg', items: ['White Burger', 'Pepsi'] },
    { id: 'c4', name: 'Combo Caipira', price: 36.90, oldPrice: 44.00, desc: 'Caipira + Suco de Laranja + Batata Doce', img: 'imagens/Combo 4.jpg', items: ['Caipira', 'Suco de Laranja'] },
    { id: 'c5', name: 'Combo Chiking', price: 38.90, oldPrice: 47.00, desc: 'Chiking + Suco de Uva + Nuggets', img: 'imagens/Combo 5.jpg', items: ['Chiking', 'Suco de Uva'] },
    { id: 'c6', name: 'Combo Tradicional', price: 27.90, oldPrice: 35.00, desc: 'Tradicional + Água + Batata Frita Pequena', img: 'imagens/Combo 6.jpg', items: ['Tradicional', 'Água'] }
];

const ofertas = [
    { id: 'o1', name: 'X Salada', price: 22.90, oldPrice: 30.00, desc: 'Promoção! Pão brioche, hambúrguer 180g, alface, tomate, cebola e maionese especial', img: 'imagens/Hamburguer 1.jpg', type: 'hamburguer' },
    { id: 'o2', name: 'Tradicional', price: 19.90, oldPrice: 28.00, desc: 'Promoção imperdível! Pão clássico, hambúrguer 150g, queijo cheddar, picles e ketchup', img: 'imagens/Hamburguer 6.jpg', type: 'hamburguer' },
    { id: 'o3', name: 'Suco de Laranja', price: 8.90, oldPrice: 12.00, desc: 'Natural, 400ml - Oferta do dia!', img: 'imagens/suco-laranja.jpg', type: 'bebida' },
    { id: 'o4', name: 'Coca-Cola', price: 5.00, oldPrice: 7.00, desc: 'Lata 350ml - Leve 2 por R$10!', img: 'imagens/Coca-cola.jpg', type: 'bebida' },
    { id: 'o5', name: 'Combo Clássico', price: 24.90, oldPrice: 29.90, desc: 'Super oferta! Hambúrguer X Salada + Coca-Cola + Batata Frita Média', img: 'imagens/Combo 1.jpg', type: 'combo' },
    { id: 'o6', name: 'Combo Tradicional', price: 22.90, oldPrice: 27.90, desc: 'Mega oferta! Hambúrguer Tradicional + Água + Batata Frita Pequena', img: 'imagens/Combo 6.jpg', type: 'combo' }
];

let cart = [];
let currentFilter = 'todos';
let currentPage = 'home';
let currentEditIndex = null;
let tempAddons = [];

// ===== ALL PRODUCTS =====
function getAllProducts() {
    return [
        ...hamburguers.map(p => ({...p, category: 'hamburgueres'})),
        ...bebidas.map(p => ({...p, category: 'bebidas'})),
        ...combos.map(p => ({...p, category: 'combos'})),
        ...ofertas.map(p => ({...p, category: 'ofertas'}))
    ];
}

// ===== PAGE NAVIGATION =====
function showPage(page) {
    document.querySelectorAll('[id^="page-"]').forEach(p => p.style.display = 'none');
    document.getElementById('page-' + page).style.display = 'block';
    currentPage = page;

    document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
    if (page === 'home') document.getElementById('nav-home').classList.add('active');
    if (page === 'cardapio') {
        document.getElementById('nav-cardapio').classList.add('active');
        resetFilters();
    }

    const sidebar = document.getElementById('sidebar');
    if (page === 'cardapio') {
        sidebar.style.display = 'block';
        renderProducts();
    } else if (page === 'carrinho') {
        sidebar.style.display = 'none';
        renderCart();
    } else if (page === 'checkout') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== RESET FILTERS =====
function resetFilters() {
    currentFilter = 'todos';
    document.getElementById('filterClass').value = '';
    document.getElementById('filterPrice').value = '';
    document.getElementById('filterPopular').value = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('pageCardapioTitle').textContent = 'Todos produtos';
    
    document.querySelectorAll('.sidebar-item').forEach(s => s.classList.remove('active'));
    document.getElementById('side-todos').classList.add('active');
}

// ===== SIDEBAR TOGGLE =====
function toggleSubmenu(el) {
    el.classList.toggle('expanded');
    const sub = el.nextElementSibling;
    if (sub && sub.classList.contains('sidebar-sub')) {
        sub.style.display = sub.style.display === 'none' ? 'block' : 'none';
    }
}

// ===== FILTER CATEGORY =====
function filterCategory(cat) {
    currentFilter = cat;
    document.querySelectorAll('.sidebar-item').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('side-' + cat);
    if (target) target.classList.add('active');

    const titles = {
        'todos': 'Todos produtos',
        'hamburgueres': 'Hambúrgueres',
        'bebidas': 'Bebidas',
        'combos': 'Combos',
        'ofertas': 'Ofertas'
    };
    document.getElementById('pageCardapioTitle').textContent = titles[cat] || 'Todos produtos';

    if (currentPage !== 'cardapio') showPage('cardapio');
    else renderProducts();
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
    const grid = document.getElementById('productGrid');
    const search = document.getElementById('searchInput').value.toLowerCase();
    const priceOrder = document.getElementById('filterPrice').value;
    const classFilter = document.getElementById('filterClass').value;

    let products = getAllProducts();

    if (currentFilter !== 'todos') {
        products = products.filter(p => p.category === currentFilter);
    }

    if (classFilter && currentFilter === 'todos') {
        products = products.filter(p => p.category === classFilter);
    }

    if (search) {
        products = products.filter(p => p.name.toLowerCase().includes(search));
    }

    if (priceOrder === 'asc') products.sort((a, b) => a.price - b.price);
    if (priceOrder === 'desc') products.sort((a, b) => b.price - a.price);

    grid.innerHTML = '';
    products.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        let badge = '';
        if (p.category === 'ofertas') badge = '<div class="offer-badge"> OFERTA</div>';
        else if (p.category === 'combos') badge = '<div class="combo-badge">COMBO</div>';

        let priceHTML = `<span class="product-price">R$ ${p.price.toFixed(2).replace('.', ',')}</span>`;
        if (p.oldPrice) {
            priceHTML = `<span class="product-old-price">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span>` + priceHTML;
        }

        card.innerHTML = `
            ${badge}
            <div class="product-img">
                <img src="${p.img}" alt="${p.name}" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;background:#e8e2cf;display:flex;align-items:center;justify-content:center;font-size:48px;\\'>🍔</div>'">
            </div>
            <div class="product-info">
                <div class="product-name">${p.name}</div>
                <div class="product-price-row">
                    ${priceHTML}
                    <button class="add-btn" onclick="addToCart('${p.id}', '${p.category}')">+</button>
                </div>
            </div>
        `;
        grid.appendChild(card);

        setTimeout(() => card.classList.add('visible'), 50 + i * 80);
    });
}

function filterProducts() {
    renderProducts();
}

// ===== CART LOGIC =====
function addToCart(id, category) {
    let product;
    if (category === 'hamburgueres') product = hamburguers.find(p => p.id === id);
    else if (category === 'bebidas') product = bebidas.find(p => p.id === id);
    else if (category === 'combos') product = combos.find(p => p.id === id);
    else if (category === 'ofertas') product = ofertas.find(p => p.id === id);

    if (!product) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, category: category, qty: 1, addons: [], removed: [] });
    }

    updateCartCount();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const total = cart.reduce((sum, c) => sum + c.qty, 0);
    document.getElementById('cartCount').textContent = total;
}

// ===== CALCULAR PREÇO DO ITEM COM ADICIONAIS =====
function calculateItemPrice(item) {
    let basePrice = item.price;
    let addonsTotal = 0;
    
    if (item.addons && item.addons.length > 0) {
        item.addons.forEach(addon => {
            addonsTotal += addon.price;
        });
    }
    
    return basePrice + addonsTotal;
}

// ===== CALCULAR TOTAL DO CARRINHO =====
function calculateCartTotal() {
    return cart.reduce((sum, item) => {
        const itemPrice = calculateItemPrice(item);
        return sum + (itemPrice * item.qty);
    }, 0);
}

function renderCart() {
    const list = document.getElementById('cartItemsList');
    const sidebar = document.getElementById('cartSidebar');
    const detailPanel = document.getElementById('cartDetailPanel');

    detailPanel.style.display = 'none';

    if (cart.length === 0) {
        list.innerHTML = '<p style="color:#999; font-size:15px; padding:40px 0; text-align:center;">Seu carrinho está vazio 😕</p>';
        sidebar.style.display = 'none';
        return;
    }

    sidebar.style.display = 'block';
    let html = '';
    
    cart.forEach((item, i) => {
        const itemTotal = calculateItemPrice(item) * item.qty;
        const addonsText = item.addons && item.addons.length > 0 
            ? ` + ${item.addons.map(a => a.name).join(', ')}` 
            : '';
        
        html += `
            <div class="cart-item animate-in" style="animation-delay:${i * 0.1}s">
                <div class="cart-item-img">
                    <img src="${item.img}" alt="${item.name}" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;background:#e8e2cf;display:flex;align-items:center;justify-content:center;font-size:28px;\\'>🍔</div>'">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}${addonsText}</div>
                    <div class="cart-item-desc">Qtd: ${item.qty}</div>
                </div>
                <div class="cart-item-actions">
                    <button class="edit-btn" onclick="editCartItem(${i})">Editar</button>
                    <button class="remove-btn" onclick="removeFromCart('${item.id}')">×</button>
                </div>
                <div class="cart-item-price">R$ ${itemTotal.toFixed(2).replace('.', ',')}</div>
            </div>
        `;
    });

    const total = calculateCartTotal();
    html += `
        <div style="background:#fff; border:2px solid #d5ceb8; border-radius:10px; padding:16px 18px; margin-top:12px; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:16px; font-weight:700; color:#2d3a2a;">Total:</span>
            <span style="font-size:20px; font-weight:700; color:#3d5a3a;">R$ ${total.toFixed(2).replace('.', ',')}</span>
        </div>
    `;

    list.innerHTML = html;
}

// ===== FUNÇÃO DE EDIÇÃO =====
function editCartItem(index) {
    currentEditIndex = index;
    const item = cart[index];
    if (!item) return;

    const panel = document.getElementById('cartDetailPanel');
    panel.style.display = 'block';

    document.getElementById('detailImg').innerHTML = `<img src="${item.img}" alt="${item.name}" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;background:#e8e2cf;display:flex;align-items:center;justify-content:center;font-size:48px;\\'>🍔</div>'">`;
    document.getElementById('detailName').textContent = item.name;
    document.getElementById('detailDesc').textContent = item.desc || '';

    // Carregar adicionais existentes
    tempAddons = item.addons ? [...item.addons] : [];

    const editSection = document.getElementById('editSection');
    editSection.innerHTML = '';

    const isHamburguer = item.category === 'hamburgueres' || item.type === 'hamburguer';
    const isBebida = item.category === 'bebidas' || item.type === 'bebida';
    const isCombo = item.category === 'combos' || item.type === 'combo';

    if (isHamburguer) {
        let html = '<div class="detail-section-title">Quer adicionar?</div>';
        const addons = [
            {name: 'Cheddar', price: 3.00},
            {name: 'Bacon', price: 3.00},
            {name: 'Picles', price: 2.00},
            {name: 'Cebola car.', price: 3.00},
            {name: 'Hambúrguer extra', price: 6.00}
        ];
        
        addons.forEach(a => {
            const isChecked = tempAddons.find(t => t.name === a.name) ? 'checked' : '';
            html += `
                <label class="addon-item">
                    <input type="checkbox" data-addon="${a.name}" data-price="${a.price}" ${isChecked} onchange="updateTempAddons()">
                    <span>${a.name}</span>
                    <span class="addon-price">R$ ${a.price.toFixed(2).replace('.', ',')}</span>
                </label>
            `;
        });

        html += '<div class="detail-section-title" style="margin-top:16px;">Quer retirar?</div>';
        html += '<input type="text" class="remove-input" placeholder="Digite aqui" id="removeInput">';
        
        // Adicionar display do preço atualizado
        html += '<div style="margin-top:16px; padding:12px; background:#f5f0e1; border-radius:8px; text-align:center;">';
        html += '<span style="font-size:14px; color:#666;">Preço com adicionais: </span>';
        html += `<span id="currentEditPrice" style="font-size:18px; font-weight:700; color:#3d5a3a;">R$ ${calculateItemPrice(item).toFixed(2).replace('.', ',')}</span>`;
        html += '</div>';
        
        editSection.innerHTML = html;

    } else if (isBebida) {
        let html = '<div class="detail-section-title">Quer adicionar?</div>';
        const isChecked = tempAddons.find(t => t.name === 'Canudo') ? 'checked' : '';
        html += `
            <label class="addon-item">
                <input type="checkbox" data-addon="Canudo" data-price="0.75" ${isChecked} onchange="updateTempAddons()">
                <span>Canudo</span>
                <span class="addon-price">R$ 0,75</span>
            </label>
        `;
        
        // Adicionar display do preço atualizado
        html += '<div style="margin-top:16px; padding:12px; background:#f5f0e1; border-radius:8px; text-align:center;">';
        html += '<span style="font-size:14px; color:#666;">Preço com adicionais: </span>';
        html += `<span id="currentEditPrice" style="font-size:18px; font-weight:700; color:#3d5a3a;">R$ ${calculateItemPrice(item).toFixed(2).replace('.', ',')}</span>`;
        html += '</div>';
        
        editSection.innerHTML = html;

    } else if (isCombo) {
        editSection.innerHTML = '<p style="color:#777; font-size:13px; margin-top:10px; font-style:italic;">Combos não possuem opções de edição.</p>';
    }

    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== ATUALIZAR ADICIONAIS TEMPORÁRIOS =====
function updateTempAddons() {
    const checkboxes = document.querySelectorAll('#editSection input[type="checkbox"]');
    tempAddons = [];
    let addonsTotal = 0;
    
    checkboxes.forEach(cb => {
        if (cb.checked) {
            tempAddons.push({
                name: cb.getAttribute('data-addon'),
                price: parseFloat(cb.getAttribute('data-price'))
            });
            addonsTotal += parseFloat(cb.getAttribute('data-price'));
        }
    });
    
    // Atualizar preço exibido
    const item = cart[currentEditIndex];
    const newPrice = item.price + addonsTotal;
    const priceDisplay = document.getElementById('currentEditPrice');
    if (priceDisplay) {
        priceDisplay.textContent = `R$ ${newPrice.toFixed(2).replace('.', ',')}`;
    }
}

// ===== FINALIZAR EDIÇÃO =====
function finalizeEdit() {
    if (currentEditIndex !== null && cart[currentEditIndex]) {
        // Salvar os adicionais selecionados
        cart[currentEditIndex].addons = [...tempAddons];
        
        // Salvar itens removidos (se houver)
        const removeInput = document.getElementById('removeInput');
        if (removeInput && removeInput.value.trim()) {
            cart[currentEditIndex].removed = [removeInput.value.trim()];
        } else {
            cart[currentEditIndex].removed = [];
        }
    }
    
    showNotification('Edição finalizada! ✓');
    document.getElementById('cartDetailPanel').style.display = 'none';
    currentEditIndex = null;
    tempAddons = [];
    
    // Re-renderizar o carrinho para atualizar os preços
    renderCart();
}

function finalizeOrder() {
    if (cart.length === 0) {
        showNotification('Adicione itens ao carrinho primeiro!');
        return;
    }
    showPage('checkout');
}

function confirmOrder() {
    showNotification('Pedido confirmado! 🎉 Obrigado pela preferência!');
    cart = [];
    updateCartCount();
    setTimeout(() => showPage('home'), 2000);
}

// ===== PAYMENT =====
function selectPayment(el) {
    document.querySelectorAll('.payment-option').forEach(p => p.classList.remove('selected'));
    el.classList.add('selected');
}

// ===== CAROUSEL =====
let currentSlide = 0;
const slides = [
    { bg: 'linear-gradient(135deg, #3d5a3a, #5a7a52)', text: '🔥 Promoções Relâmpago 🔥' },
    { bg: 'linear-gradient(135deg, #8B4513, #A0522D)', text: '🍔 Novos Sabores 🍔' },
    { bg: 'linear-gradient(135deg, #2c3e50, #34495e)', text: ' Combos Imperdíveis 🎁' },
    { bg: 'linear-gradient(135deg, #c0392b, #e74c3c)', text: '💰 Ofertas da Semana 💰' }
];

function updateCarousel() {
    const slide = document.getElementById('carouselSlide');
    const s = slides[currentSlide];
    slide.style.background = s.bg;
    slide.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#f5f0e1;font-size:clamp(24px,4vw,42px);font-weight:700;text-align:center;padding:20px;">${s.text}</div>`;

    document.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() { currentSlide = (currentSlide + 1) % slides.length; updateCarousel(); }
function prevSlide() { currentSlide = (currentSlide - 1 + slides.length) % slides.length; updateCarousel(); }
function goToSlide(i) { currentSlide = i; updateCarousel(); }

setInterval(nextSlide, 5000);

// ===== NOTIFICATION =====
function showNotification(msg) {
    const notif = document.getElementById('notification');
    notif.textContent = msg;
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 2500);
}

// ===== INIT =====
updateCarousel();
showPage('home');