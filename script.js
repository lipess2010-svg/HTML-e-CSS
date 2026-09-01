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
let currentPage = 'login';
let currentEditIndex = null;
let tempAddons = [];
let selectedPaymentMethod = 'pix';
let selectedDinheiroOption = 'retirada';

// ===== BANCO DE DADOS LOCAL =====
function getUsers() { return JSON.parse(localStorage.getItem('bb_users') || '[]'); }
function saveUsers(users) { localStorage.setItem('bb_users', JSON.stringify(users)); }
function getCurrentUser() {
    const email = localStorage.getItem('bb_currentUser');
    if (!email) return null;
    return getUsers().find(u => u.email === email) || null;
}
function setCurrentUser(email) { localStorage.setItem('bb_currentUser', email); }
function clearCurrentUser() { localStorage.removeItem('bb_currentUser'); }
function getSettings() { return JSON.parse(localStorage.getItem('bb_settings') || '{"darkMode":false,"fontSize":"medium"}'); }
function saveSettings(settings) { localStorage.setItem('bb_settings', JSON.stringify(settings)); }

// ===== NÚMERO DO PEDIDO =====
function getPedidoNumber() {
    let num = parseInt(localStorage.getItem('bb_pedidoNumber') || '0');
    num++;
    if (num > 999) num = 1;
    localStorage.setItem('bb_pedidoNumber', num.toString());
    return num;
}

// ===== INICIALIZAÇÃO =====
function initApp() {
    const currentUser = getCurrentUser();
    const settings = getSettings();
    
    if (settings.darkMode) document.body.classList.add('dark-mode');
    document.body.classList.add('font-' + settings.fontSize);
    
    updateThemeIcon();

    if (currentUser) {
        document.getElementById('page-login').style.display = 'none';
        document.getElementById('page-cadastro').style.display = 'none';
        document.getElementById('mainHeader').style.display = 'flex';
        document.getElementById('mainLayout').style.display = 'flex';
        showPage('home');
    } else {
        document.getElementById('mainHeader').style.display = 'none';
        document.getElementById('mainLayout').style.display = 'none';
        showPage('login');
    }
}

// ===== TEMA =====
function toggleThemeLogin() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    const settings = getSettings();
    settings.darkMode = isDark;
    saveSettings(settings);
    updateThemeIcon();
    const settingsToggle = document.getElementById('darkModeToggle');
    if (settingsToggle) settingsToggle.checked = isDark;
}

function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark-mode');
    const btn = document.getElementById('themeToggleBtn');
    const btn2 = document.getElementById('themeToggleBtnCadastro');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
    if (btn2) btn2.textContent = isDark ? '☀️' : '';
}

// ===== LOGIN E CADASTRO =====
function fazerLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const senha = document.getElementById('loginSenha').value;
    const errorDiv = document.getElementById('loginError');
    
    errorDiv.style.display = 'none';
    if (!email || !senha) { errorDiv.textContent = 'Preencha o email e a senha!'; errorDiv.style.display = 'block'; return; }
    
    const users = getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (!user) { errorDiv.textContent = 'Email não cadastrado!'; errorDiv.style.display = 'block'; return; }
    if (user.senha !== senha) { errorDiv.textContent = 'Senha incorreta!'; errorDiv.style.display = 'block'; return; }
    
    setCurrentUser(user.email);
    document.getElementById('page-login').style.display = 'none';
    document.getElementById('mainHeader').style.display = 'flex';
    document.getElementById('mainLayout').style.display = 'flex';
    showPage('home');
    showNotification('Bem-vindo de volta! 🎉');
}

function cadastrar() {
    const email = document.getElementById('cadastroEmail').value.trim();
    const senha = document.getElementById('cadastroSenha').value;
    const confirmarSenha = document.getElementById('cadastroConfirmarSenha').value;
    const errorDiv = document.getElementById('cadastroError');
    const successDiv = document.getElementById('cadastroSuccess');
    
    errorDiv.style.display = 'none'; successDiv.style.display = 'none';
    
    if (!email || !senha || !confirmarSenha) { errorDiv.textContent = 'Preencha todos os campos!'; errorDiv.style.display = 'block'; return; }
    if (senha.length < 4) { errorDiv.textContent = 'A senha deve ter pelo menos 4 caracteres!'; errorDiv.style.display = 'block'; return; }
    if (senha !== confirmarSenha) { errorDiv.textContent = 'As senhas não coincidem!'; errorDiv.style.display = 'block'; return; }
    
    const users = getUsers();
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
        errorDiv.textContent = 'Este email já está cadastrado!'; errorDiv.style.display = 'block'; return;
    }
    
    users.push({ email: email, senha: senha, endereco: null });
    saveUsers(users);
    
    successDiv.textContent = 'Conta criada com sucesso! Faça login.';
    successDiv.style.display = 'block';
    document.getElementById('cadastroEmail').value = '';
    document.getElementById('cadastroSenha').value = '';
    document.getElementById('cadastroConfirmarSenha').value = '';
    
    setTimeout(() => showPage('login'), 1500);
}

function fazerLogout() {
    clearCurrentUser();
    cart = [];
    updateCartCount();
    closeUserMenu();
    
    document.getElementById('mainHeader').style.display = 'none';
    document.getElementById('mainLayout').style.display = 'none';
    showPage('login');
    
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginSenha').value = '';
    document.getElementById('loginError').style.display = 'none';
    showNotification('Você saiu da conta');
}

function trocarSenha() {
    const novaSenha = document.getElementById('novaSenha').value;
    const confirmarNovaSenha = document.getElementById('confirmarNovaSenha').value;
    const errorDiv = document.getElementById('trocarSenhaError');
    const successDiv = document.getElementById('trocarSenhaSuccess');
    
    errorDiv.style.display = 'none'; successDiv.style.display = 'none';
    
    if (!novaSenha || !confirmarNovaSenha) { errorDiv.textContent = 'Preencha os dois campos!'; errorDiv.style.display = 'block'; return; }
    if (novaSenha.length < 4) { errorDiv.textContent = 'A senha deve ter pelo menos 4 caracteres!'; errorDiv.style.display = 'block'; return; }
    if (novaSenha !== confirmarNovaSenha) { errorDiv.textContent = 'As senhas não coincidem!'; errorDiv.style.display = 'block'; return; }
    
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const users = getUsers();
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    
    if (userIndex !== -1) {
        users[userIndex].senha = novaSenha;
        saveUsers(users);
        successDiv.textContent = 'Senha alterada com sucesso!';
        successDiv.style.display = 'block';
        document.getElementById('novaSenha').value = '';
        document.getElementById('confirmarNovaSenha').value = '';
        setTimeout(() => showPage('home'), 1500);
    }
}

// ===== MENU DO USUÁRIO =====
function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('show');
    if (dropdown.classList.contains('show')) {
        const currentUser = getCurrentUser();
        if (currentUser) document.getElementById('userDropdownEmail').textContent = currentUser.email;
    }
}
function closeUserMenu() { document.getElementById('userDropdown').classList.remove('show'); }
document.addEventListener('click', function(e) {
    const wrapper = document.querySelector('.user-avatar-wrapper');
    if (wrapper && !wrapper.contains(e.target)) closeUserMenu();
});

// ===== CONFIGURAÇÕES =====
function toggleDarkMode() {
    const isDark = document.getElementById('darkModeToggle').checked;
    document.body.classList.toggle('dark-mode', isDark);
    const settings = getSettings();
    settings.darkMode = isDark;
    saveSettings(settings);
    updateThemeIcon();
}

function setFontSize(size) {
    document.body.classList.remove('font-small', 'font-medium', 'font-large');
    document.body.classList.add('font-' + size);
    document.querySelectorAll('.font-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.size === size));
    const settings = getSettings();
    settings.fontSize = size;
    saveSettings(settings);
}

function desvincularEndereco() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    const users = getUsers();
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].endereco = null;
        saveUsers(users);
        document.getElementById('enderecoSalvoInfo').textContent = 'Nenhum endereço salvo';
        document.getElementById('btnDesvincularEndereco').style.display = 'none';
        showNotification('Endereço desvinculado!');
    }
}

function atualizarInfoEndereco() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    const infoDiv = document.getElementById('enderecoSalvoInfo');
    const btnDesvincular = document.getElementById('btnDesvincularEndereco');
    if (currentUser.endereco) {
        const e = currentUser.endereco;
        infoDiv.innerHTML = `<strong>${e.cidade}</strong><br>${e.bairro} - CEP: ${e.cep}<br>Nº ${e.numero}${e.ap ? ', Ap ' + e.ap : ''}`;
        btnDesvincular.style.display = 'inline-block';
    } else {
        infoDiv.textContent = 'Nenhum endereço salvo';
        btnDesvincular.style.display = 'none';
    }
}

function carregarEnderecoSalvo() {
    const currentUser = getCurrentUser();
    if (!currentUser || !currentUser.endereco) return;
    const e = currentUser.endereco;
    document.getElementById('pagCidade').value = e.cidade || '';
    document.getElementById('pagBairro').value = e.bairro || '';
    document.getElementById('pagCep').value = e.cep || '';
    document.getElementById('pagNumero').value = e.numero || '';
    document.getElementById('pagAp').value = e.ap || '';
}

function salvarEndereco() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    const cidade = document.getElementById('pagCidade').value.trim();
    const bairro = document.getElementById('pagBairro').value.trim();
    const cep = document.getElementById('pagCep').value.trim();
    const numero = document.getElementById('pagNumero').value.trim();
    const ap = document.getElementById('pagAp').value.trim();
    if (!cidade || !bairro || !cep || !numero) return;
    
    const users = getUsers();
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].endereco = { cidade, bairro, cep, numero, ap };
        saveUsers(users);
        showNotification('Endereço salvo na conta! ✓');
    }
}

// ===== NAVEGAÇÃO =====
function showPage(page) {
    document.querySelectorAll('[id^="page-"]').forEach(p => p.style.display = 'none');
    const pageEl = document.getElementById('page-' + page);
    if (pageEl) {
        pageEl.style.display = (page === 'login' || page === 'cadastro' || page === 'trocar-senha' || page === 'configuracoes') ? 'flex' : 'block';
    }
    currentPage = page;
    
    document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
    if (page === 'home') document.getElementById('nav-home').classList.add('active');
    if (page === 'cardapio') { document.getElementById('nav-cardapio').classList.add('active'); resetFilters(); }
    
    const sidebar = document.getElementById('sidebar');
    if (page === 'cardapio') { sidebar.style.display = 'block'; renderProducts(); } 
    else if (page === 'carrinho') { sidebar.style.display = 'none'; renderCart(); } 
    else if (page === 'checkout') { sidebar.style.display = 'none'; }
    else if (page === 'pagamento') { sidebar.style.display = 'none'; initPagamento(); }
    else if (page === 'confirmacao') { sidebar.style.display = 'none'; }
    else if (page === 'trocar-senha') {
        const currentUser = getCurrentUser();
        if (currentUser) document.getElementById('trocarSenhaEmail').textContent = currentUser.email;
    } else if (page === 'configuracoes') {
        const settings = getSettings();
        document.getElementById('darkModeToggle').checked = settings.darkMode;
        document.querySelectorAll('.font-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.size === settings.fontSize));
        atualizarInfoEndereco();
    } else { sidebar.style.display = 'block'; }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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

function toggleSubmenu(el) {
    el.classList.toggle('expanded');
    const sub = el.nextElementSibling;
    if (sub && sub.classList.contains('sidebar-sub')) sub.style.display = sub.style.display === 'none' ? 'block' : 'none';
}

function filterCategory(cat) {
    currentFilter = cat;
    document.querySelectorAll('.sidebar-item').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('side-' + cat);
    if (target) target.classList.add('active');
    const titles = { 'todos': 'Todos produtos', 'hamburgueres': 'Hambúrgueres', 'bebidas': 'Bebidas', 'combos': 'Combos', 'ofertas': 'Ofertas' };
    document.getElementById('pageCardapioTitle').textContent = titles[cat] || 'Todos produtos';
    if (currentPage !== 'cardapio') showPage('cardapio'); else renderProducts();
}

function getAllProducts() {
    return [
        ...hamburguers.map(p => ({...p, category: 'hamburgueres'})),
        ...bebidas.map(p => ({...p, category: 'bebidas'})),
        ...combos.map(p => ({...p, category: 'combos'})),
        ...ofertas.map(p => ({...p, category: 'ofertas'}))
    ];
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    const search = document.getElementById('searchInput').value.toLowerCase();
    const priceOrder = document.getElementById('filterPrice').value;
    const classFilter = document.getElementById('filterClass').value;
    let products = getAllProducts();

    if (currentFilter !== 'todos') products = products.filter(p => p.category === currentFilter);
    if (classFilter && currentFilter === 'todos') products = products.filter(p => p.category === classFilter);
    if (search) products = products.filter(p => p.name.toLowerCase().includes(search));
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
        if (p.oldPrice) priceHTML = `<span class="product-old-price">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span>` + priceHTML;

        card.innerHTML = `${badge}<div class="product-img"><img src="${p.img}" alt="${p.name}" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;background:#e8e2cf;display:flex;align-items:center;justify-content:center;font-size:48px;\\'>🍔</div>'"></div><div class="product-info"><div class="product-name">${p.name}</div><div class="product-price-row">${priceHTML}<button class="add-btn" onclick="addToCart('${p.id}', '${p.category}')">+</button></div></div>`;
        grid.appendChild(card);
        setTimeout(() => card.classList.add('visible'), 50 + i * 80);
    });
}

function filterProducts() { renderProducts(); }

// ===== CARRINHO =====
function addToCart(id, category) {
    let product;
    if (category === 'hamburgueres') product = hamburguers.find(p => p.id === id);
    else if (category === 'bebidas') product = bebidas.find(p => p.id === id);
    else if (category === 'combos') product = combos.find(p => p.id === id);
    else if (category === 'ofertas') product = ofertas.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(c => c.id === id);
    if (existing) existing.qty++;
    else cart.push({ ...product, category: category, qty: 1, addons: [], removed: [] });

    updateCartCount();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

function removeFromCart(id) { cart = cart.filter(c => c.id !== id); updateCartCount(); renderCart(); }

function updateCartCount() { document.getElementById('cartCount').textContent = cart.reduce((sum, c) => sum + c.qty, 0); }

// ===== FUNÇÕES DE QUANTIDADE =====
function increaseQty(id) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty++;
        updateCartCount();
        renderCart();
    }
}

function decreaseQty(id) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty--;
        if (item.qty <= 0) {
            removeFromCart(id);
        } else {
            updateCartCount();
            renderCart();
        }
    }
}

function updateQty(id, newQty) {
    const item = cart.find(c => c.id === id);
    if (item) {
        const qty = parseInt(newQty);
        if (isNaN(qty) || qty <= 0) {
            removeFromCart(id);
        } else {
            item.qty = qty;
            updateCartCount();
            renderCart();
        }
    }
}

function calculateItemPrice(item) {
    let basePrice = item.price;
    if (item.addons && item.addons.length > 0) item.addons.forEach(addon => basePrice += addon.price);
    return basePrice;
}

function calculateCartTotal() { return cart.reduce((sum, item) => sum + (calculateItemPrice(item) * item.qty), 0); }

function renderCart() {
    const list = document.getElementById('cartItemsList');
    const sidebar = document.getElementById('cartSidebar');
    const detailPanel = document.getElementById('cartDetailPanel');
    detailPanel.style.display = 'none';

    if (cart.length === 0) {
        list.innerHTML = '<p style="color:#999; font-size:15px; padding:40px 0; text-align:center;">Seu carrinho está vazio 😕</p>';
        sidebar.style.display = 'none'; return;
    }

    sidebar.style.display = 'block';
    let html = '';
    cart.forEach((item, i) => {
        const itemTotal = calculateItemPrice(item) * item.qty;
        const addonsText = item.addons && item.addons.length > 0 ? ` + ${item.addons.map(a => a.name).join(', ')}` : '';
        html += `
            <div class="cart-item animate-in" style="animation-delay:${i * 0.1}s">
                <div class="cart-item-img">
                    <img src="${item.img}" alt="${item.name}" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;background:#e8e2cf;display:flex;align-items:center;justify-content:center;font-size:28px;\\'>🍔</div>'">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}${addonsText}</div>
                    <div class="qty-controls">
                        <button class="qty-btn qty-minus" onclick="decreaseQty('${item.id}')">−</button>
                        <input type="number" class="qty-input" value="${item.qty}" min="1" max="99" onchange="updateQty('${item.id}', this.value)" onkeypress="if(event.key==='Enter'){updateQty('${item.id}', this.value); this.blur();}">
                        <button class="qty-btn qty-plus" onclick="increaseQty('${item.id}')">+</button>
                    </div>
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
    html += `<div style="background:#fff; border:2px solid #d5ceb8; border-radius:10px; padding:16px 18px; margin-top:12px; display:flex; justify-content:space-between; align-items:center;"><span style="font-size:16px; font-weight:700; color:#2d3a2a;">Total:</span><span style="font-size:20px; font-weight:700; color:#3d5a3a;">R$ ${total.toFixed(2).replace('.', ',')}</span></div>`;
    list.innerHTML = html;
}

function editCartItem(index) {
    currentEditIndex = index;
    const item = cart[index];
    if (!item) return;
    const panel = document.getElementById('cartDetailPanel');
    panel.style.display = 'block';
    document.getElementById('detailImg').innerHTML = `<img src="${item.img}" alt="${item.name}" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;background:#e8e2cf;display:flex;align-items:center;justify-content:center;font-size:48px;\\'>🍔</div>'">`;
    document.getElementById('detailName').textContent = item.name;
    document.getElementById('detailDesc').textContent = item.desc || '';
    tempAddons = item.addons ? [...item.addons] : [];
    const editSection = document.getElementById('editSection');
    editSection.innerHTML = '';

    const isHamburguer = item.category === 'hamburgueres' || item.type === 'hamburguer';
    const isBebida = item.category === 'bebidas' || item.type === 'bebida';

    if (isHamburguer) {
        let html = '<div class="detail-section-title">Quer adicionar?</div>';
        const addons = [{name: 'Cheddar', price: 3.00}, {name: 'Bacon', price: 3.00}, {name: 'Picles', price: 2.00}, {name: 'Cebola car.', price: 3.00}, {name: 'Hambúrguer extra', price: 6.00}];
        addons.forEach(a => {
            const isChecked = tempAddons.find(t => t.name === a.name) ? 'checked' : '';
            html += `<label class="addon-item"><input type="checkbox" data-addon="${a.name}" data-price="${a.price}" ${isChecked} onchange="updateTempAddons()"><span>${a.name}</span><span class="addon-price">R$ ${a.price.toFixed(2).replace('.', ',')}</span></label>`;
        });
        html += '<div class="detail-section-title" style="margin-top:16px;">Quer retirar?</div><input type="text" class="remove-input" placeholder="Digite aqui" id="removeInput">';
        html += `<div style="margin-top:16px; padding:12px; background:#f5f0e1; border-radius:8px; text-align:center;"><span style="font-size:14px; color:#666;">Preço com adicionais: </span><span id="currentEditPrice" style="font-size:18px; font-weight:700; color:#3d5a3a;">R$ ${calculateItemPrice(item).toFixed(2).replace('.', ',')}</span></div>`;
        editSection.innerHTML = html;
    } else if (isBebida) {
        let html = '<div class="detail-section-title">Quer adicionar?</div>';
        const isChecked = tempAddons.find(t => t.name === 'Canudo') ? 'checked' : '';
        html += `<label class="addon-item"><input type="checkbox" data-addon="Canudo" data-price="0.75" ${isChecked} onchange="updateTempAddons()"><span>Canudo</span><span class="addon-price">R$ 0,75</span></label>`;
        html += `<div style="margin-top:16px; padding:12px; background:#f5f0e1; border-radius:8px; text-align:center;"><span style="font-size:14px; color:#666;">Preço com adicionais: </span><span id="currentEditPrice" style="font-size:18px; font-weight:700; color:#3d5a3a;">R$ ${calculateItemPrice(item).toFixed(2).replace('.', ',')}</span></div>`;
        editSection.innerHTML = html;
    } else {
        editSection.innerHTML = '<p style="color:#777; font-size:13px; margin-top:10px; font-style:italic;">Combos não possuem opções de edição.</p>';
    }
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function updateTempAddons() {
    const checkboxes = document.querySelectorAll('#editSection input[type="checkbox"]');
    tempAddons = [];
    let addonsTotal = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) {
            tempAddons.push({ name: cb.getAttribute('data-addon'), price: parseFloat(cb.getAttribute('data-price')) });
            addonsTotal += parseFloat(cb.getAttribute('data-price'));
        }
    });
    const item = cart[currentEditIndex];
    const newPrice = item.price + addonsTotal;
    const priceDisplay = document.getElementById('currentEditPrice');
    if (priceDisplay) priceDisplay.textContent = `R$ ${newPrice.toFixed(2).replace('.', ',')}`;
}

function finalizeEdit() {
    if (currentEditIndex !== null && cart[currentEditIndex]) {
        cart[currentEditIndex].addons = [...tempAddons];
        const removeInput = document.getElementById('removeInput');
        cart[currentEditIndex].removed = (removeInput && removeInput.value.trim()) ? [removeInput.value.trim()] : [];
    }
    showNotification('Edição finalizada! ✓');
    document.getElementById('cartDetailPanel').style.display = 'none';
    currentEditIndex = null; tempAddons = [];
    renderCart();
}

function finalizeOrder() {
    if (cart.length === 0) { showNotification('Adicione itens ao carrinho primeiro!'); return; }
    showPage('checkout');
}

// ===== CHECKOUT E PAGAMENTO =====
function selectPayment(el, method) {
    document.querySelectorAll('.payment-option').forEach(p => p.classList.remove('selected'));
    el.classList.add('selected');
    selectedPaymentMethod = method;
}

function goToPayment() {
    const telefone = document.getElementById('checkoutTelefone').value.trim();
    if (!telefone) {
        showNotification('Preencha o telefone!');
        return;
    }
    showPage('pagamento');
}

function initPagamento() {
    document.getElementById('entregaToggle').checked = false;
    
    if (selectedPaymentMethod === 'dinheiro') {
        document.getElementById('entregaToggleContainer').style.display = 'none';
        document.getElementById('enderecoSection').style.display = 'none';
    } else {
        document.getElementById('entregaToggleContainer').style.display = 'flex';
        document.getElementById('enderecoSection').style.display = 'none';
    }
    
    document.getElementById('pagamentoPix').style.display = 'none';
    document.getElementById('pagamentoCartao').style.display = 'none';
    document.getElementById('pagamentoDinheiro').style.display = 'none';
    document.getElementById('dinheiroEnderecoSection').style.display = 'none';
    
    if (selectedPaymentMethod === 'pix') {
        document.getElementById('pagamentoPix').style.display = 'block';
    } else if (selectedPaymentMethod === 'cartao') {
        document.getElementById('pagamentoCartao').style.display = 'block';
    } else if (selectedPaymentMethod === 'dinheiro') {
        document.getElementById('pagamentoDinheiro').style.display = 'block';
        selectedDinheiroOption = 'retirada';
        document.querySelectorAll('.dinheiro-option').forEach(o => o.classList.remove('selected'));
        document.querySelector('.dinheiro-option:first-child').classList.add('selected');
    }
    
    carregarEnderecoSalvo();
    validatePagamento();
    setupPagamentoValidation();
}

function toggleEntrega() {
    const isEntrega = document.getElementById('entregaToggle').checked;
    document.getElementById('enderecoSection').style.display = isEntrega ? 'block' : 'none';
    validatePagamento();
}

function selectDinheiroOption(el, option) {
    document.querySelectorAll('.dinheiro-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    selectedDinheiroOption = option;
    
    if (option === 'entrega') {
        document.getElementById('dinheiroEnderecoSection').style.display = 'block';
    } else {
        document.getElementById('dinheiroEnderecoSection').style.display = 'none';
    }
    
    validatePagamento();
}

function setupPagamentoValidation() {
    const inputs = document.querySelectorAll('#page-pagamento .form-input');
    inputs.forEach(input => {
        input.addEventListener('input', validatePagamento);
    });
}

function validatePagamento() {
    let isValid = true;
    
    if (selectedPaymentMethod === 'pix') {
        const isEntrega = document.getElementById('entregaToggle').checked;
        if (isEntrega) {
            const cidade = document.getElementById('pagCidade').value.trim();
            const bairro = document.getElementById('pagBairro').value.trim();
            const cep = document.getElementById('pagCep').value.trim();
            const numero = document.getElementById('pagNumero').value.trim();
            if (!cidade || !bairro || !cep || !numero) isValid = false;
        }
    } else if (selectedPaymentMethod === 'cartao') {
        const cpf = document.getElementById('cartaoCpf').value.trim();
        const numero = document.getElementById('cartaoNumero').value.trim();
        const validade = document.getElementById('cartaoValidade').value.trim();
        const cvv = document.getElementById('cartaoCvv').value.trim();
        
        if (!cpf || !numero || !validade || !cvv) isValid = false;
        
        const isEntrega = document.getElementById('entregaToggle').checked;
        if (isEntrega) {
            const cidade = document.getElementById('pagCidade').value.trim();
            const bairro = document.getElementById('pagBairro').value.trim();
            const cep = document.getElementById('pagCep').value.trim();
            const numero = document.getElementById('pagNumero').value.trim();
            if (!cidade || !bairro || !cep || !numero) isValid = false;
        }
    } else if (selectedPaymentMethod === 'dinheiro') {
        if (selectedDinheiroOption === 'entrega') {
            const cidade = document.getElementById('dinheiroCidade').value.trim();
            const bairro = document.getElementById('dinheiroBairro').value.trim();
            const cep = document.getElementById('dinheiroCep').value.trim();
            const numero = document.getElementById('dinheiroNumero').value.trim();
            if (!cidade || !bairro || !cep || !numero) isValid = false;
        }
    }
    
    const comprarBtn = document.getElementById('comprarBtn');
    const comprarHint = document.getElementById('comprarHint');
    
    if (isValid) {
        comprarBtn.disabled = false;
        comprarHint.textContent = 'Clique para finalizar sua compra!';
    } else {
        comprarBtn.disabled = true;
        comprarHint.textContent = 'Preencha os campos obrigatórios para continuar';
    }
}

function maskCpf(input) {
    let v = input.value.replace(/\D/g, '');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    input.value = v;
}

function maskCard(input) {
    let v = input.value.replace(/\D/g, '');
    v = v.replace(/(\d{4})(\d)/, '$1 $2');
    v = v.replace(/(\d{4})(\d)/, '$1 $2');
    v = v.replace(/(\d{4})(\d)/, '$1 $2');
    input.value = v;
}

function maskExpiry(input) {
    let v = input.value.replace(/\D/g, '');
    v = v.replace(/(\d{2})(\d)/, '$1/$2');
    input.value = v;
}

function finalizarCompra() {
    if (selectedPaymentMethod === 'dinheiro' && selectedDinheiroOption === 'entrega') {
        if (document.getElementById('dinheiroSaveAddress').checked) {
            const cidade = document.getElementById('dinheiroCidade').value.trim();
            const bairro = document.getElementById('dinheiroBairro').value.trim();
            const cep = document.getElementById('dinheiroCep').value.trim();
            const numero = document.getElementById('dinheiroNumero').value.trim();
            const ap = document.getElementById('dinheiroAp').value.trim();
            
            if (cidade && bairro && cep && numero) {
                const currentUser = getCurrentUser();
                if (currentUser) {
                    const users = getUsers();
                    const userIndex = users.findIndex(u => u.email === currentUser.email);
                    if (userIndex !== -1) {
                        users[userIndex].endereco = { cidade, bairro, cep, numero, ap };
                        saveUsers(users);
                        showNotification('Endereço salvo na conta! ✓');
                    }
                }
            }
        }
    } else if (selectedPaymentMethod !== 'dinheiro') {
        const isEntrega = document.getElementById('entregaToggle').checked;
        if (isEntrega && document.getElementById('saveAddressCheckbox').checked) {
            salvarEndereco();
        }
    }
    
    const numeroPedido = getPedidoNumber();
    const numeroFormatado = numeroPedido.toString().padStart(3, '0');
    
    document.getElementById('pedidoNumero').textContent = numeroFormatado;
    
    cart = [];
    updateCartCount();
    
    showPage('confirmacao');
    showNotification('Pedido confirmado! 🎉');
}

// ===== CARROSSEL =====
let currentSlide = 0;

const hamburguerMaisBarato = hamburguers.reduce((prev, current) => prev.price < current.price ? prev : current);
const bebidaMaisBarata = bebidas.reduce((prev, current) => prev.price < current.price ? prev : current);
const comboMaisBarato = combos.reduce((prev, current) => prev.price < current.price ? prev : current);
const ofertasNaoBebida = ofertas.filter(o => o.type !== 'bebida');
const ofertaMaisBarata = ofertasNaoBebida.reduce((prev, current) => prev.price < current.price ? prev : current);

const slides = [
    { type: 'product', bg: 'linear-gradient(135deg, #3d5a3a, #5a7a52)', badge: '🍔 Hambúrguer mais barato', product: hamburguerMaisBarato, category: 'hamburgueres' },
    { type: 'product', bg: 'linear-gradient(135deg, #2980b9, #3498db)', badge: ' Bebida mais barata', product: bebidaMaisBarata, category: 'bebidas' },
    { type: 'product', bg: 'linear-gradient(135deg, #8B4513, #A0522D)', badge: '🎁 Combo mais barato', product: comboMaisBarato, category: 'combos' },
    { type: 'product', bg: 'linear-gradient(135deg, #c0392b, #e74c3c)', badge: '🔥 Oferta mais barata', product: ofertaMaisBarata, category: 'ofertas' }
];

function updateCarousel() {
    const slide = document.getElementById('carouselSlide');
    if (!slide) return;
    const s = slides[currentSlide];
    slide.style.background = s.bg;
    
    if (s.type === 'product') {
        const p = s.product;
        let priceHTML = p.oldPrice 
            ? `<div class="product-slide-price"><span class="old-price">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span> R$ ${p.price.toFixed(2).replace('.', ',')}</div>`
            : `<div class="product-slide-price">R$ ${p.price.toFixed(2).replace('.', ',')}</div>`;
        
        slide.innerHTML = `<div class="product-slide"><div class="product-slide-info"><div class="product-slide-badge">${s.badge}</div><div class="product-slide-name">${p.name}</div><div class="product-slide-desc">${p.desc}</div>${priceHTML}<button class="product-slide-btn" onclick="addToCart('${p.id}', '${s.category}')">Adicionar ao carrinho</button></div><div class="product-slide-image"><img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:120px;\\'>🍔</div>'"></div></div>`;
    }
    document.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

function nextSlide() { currentSlide = (currentSlide + 1) % slides.length; updateCarousel(); }
function prevSlide() { currentSlide = (currentSlide - 1 + slides.length) % slides.length; updateCarousel(); }
function goToSlide(i) { currentSlide = i; updateCarousel(); }
setInterval(nextSlide, 5000);

// ===== NOTIFICAÇÃO =====
function showNotification(msg) {
    const notif = document.getElementById('notification');
    notif.textContent = msg;
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 2500);
}

// ===== INICIALIZAÇÃO FINAL =====
initApp();
updateCarousel();