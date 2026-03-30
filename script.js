/**
 * CONFIGURAÇÕES GERAIS
 */
const CONFIG = {
    accessHash: "RzNub21AbXJwYg==", // Senha Base64: G3nom@mrpb
    initialMoney: 30000,
    money: 30000,
    examDelay: 10000 // 10 segundos
};

/**
 * DATABASE COMPLETA DE EXAMES
 */
const EXAMS_DB = [
    // --- Array-CGH ---
    {
        id: "cgh_probando",
        category: "Array-CGH",
        label: "Probando (II-3)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-CGH probando:</strong> Foram avaliadas variações no número de cópias em todo o genoma por técnica de microarray-CGH. Foi detectada deleção heterozigótica no braço curto do cromossomo X, em região Xp11, com tamanho estimado de ~7.5 Mb, envolvendo múltiplos genes. Não foram detectadas outras alterações de número de cópias clinicamente relevantes."
    },
    {
        id: "cgh_mae",
        category: "Array-CGH",
        label: "Mãe (I-1)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-CGH mãe:</strong> Não foram detectadas alterações de número de cópias clinicamente relevantes no genoma da paciente investigada."
    },
    {
        id: "cgh_pai",
        category: "Array-CGH",
        label: "Pai (I-2)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-CGH pai:</strong> Não foram detectadas alterações de número de cópias clinicamente relevantes no genoma do paciente investigado"
    },
    {
        id: "cgh_irmao",
        category: "Array-CGH",
        label: "Irmão afetado (II-2)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-CGH irmão afetado:</strong> Não foram detectadas alterações de número de cópias clinicamente relevantes no genoma do paciente investigado"
    },

    // --- Sanger (Fluxo Alterado: Pergunta -> Espera -> Resultado) ---
    {
        id: "sanger_probando",
        category: "Sanger",
        label: "Probando (II-3)",
        cost: 600,
        type: "input_gene",
        correctGenes: ["F8", "FVIII", "FFACTOR VIII", "HEMOFILIA A", "HEMOFILIA"],
        successResult: "<strong>Resultado Sanger probando (Gene F8):</strong> Foi detectada a variante <em>NM_000132.4(F8):c.6976C>T (p.Arg2326Ter)</em> em heterozigose, previamente descrita como patogênica para hemofilia A.",
        failResult: "<strong>Resultado Sanger:</strong> Foram investigados por sequenciamento Sanger os exons do gene solicitado. Não foram detectadas variantes no gene de interesse clínico para o caso."
    },
    {
        id: "sanger_mae",
        category: "Sanger",
        label: "Mãe (I-1)",
        cost: 600,
        type: "input_gene",
        correctGenes: ["F8", "FVIII", "FFACTOR VIII", "HEMOFILIA A", "HEMOFILIA"],
        successResult: "<strong>Resultado Sanger mãe (Gene F8):</strong> Foi detectada a variante <em>NM_000132.4(F8):c.6976C>T (p.Arg2326Ter)</em> em heterozigose, previamente descrita como patogênica para hemofilia A.",
        failResult: "<strong>Resultado Sanger:</strong> Foram investigados por sequenciamento Sanger os exons do gene solicitado. Não foram detectadas variantes no gene de interesse clínico para o caso."
    },
    {
        id: "sanger_pai",
        category: "Sanger",
        label: "Pai (I-2)",
        cost: 600,
        type: "input_gene",
        correctGenes: ["F8", "FVIII", "FFACTOR VIII", "HEMOFILIA A", "HEMOFILIA"],
        successResult: "<strong>Resultado Sanger pai (Gene F8):</strong> Não foram detectadas variantes patogênicas ou provavelmente patogênicas no gene F8.",
        failResult: "<strong>Resultado Sanger:</strong> Foram investigados por sequenciamento Sanger os exons do gene solicitado. Não foram detectadas variantes no gene de interesse clínico para o caso."
    },
    {
        id: "sanger_irmao",
        category: "Sanger",
        label: "Irmão afetado (II-2)",
        cost: 600,
        type: "input_gene",
        correctGenes: ["F8", "FVIII", "FFACTOR VIII", "HEMOFILIA A", "HEMOFILIA"],
        successResult: "<strong>Resultado Sanger irmão afetado (Gene F8):</strong> Foi detectada a variante <em>NM_000132.4(F8):c.6976C>T (p.Arg2326Ter)</em> em hemizigose, previamente descrita como patogênica para hemofilia A.",
        failResult: "<strong>Resultado Sanger:</strong> Foram investigados por sequenciamento Sanger os exons do gene solicitado. Não foram detectadas variantes no gene de interesse clínico para o caso."
    },

    // --- Array-SNP ---
    {
        id: "snp_probando",
        category: "Array-SNP",
        label: "Probando (II-3)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-SNP probando:</strong> Foram genotipados cerca de 500 mil polimorfismos de base única por microarray-SNP. Observou-se região de redução de sinal consistente com deleção heterozigótica em Xp11.2. Não foram identificadas outras alterações de número de cópias clinicamente relevantes."
    },
    {
        id: "snp_mae",
        category: "Array-SNP",
        label: "Mãe (I-1)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-SNP mãe:</strong> Foram genotipados cerca de 500 mil polimorfismos de base única por microarray-SNP. Não foram detectadas alterações de número de cópias clinicamente relevantes."
    },
    {
        id: "snp_pai",
        category: "Array-SNP",
        label: "Pai (I-2)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-SNP pai:</strong> Foram genotipados cerca de 500 mil polimorfismos de base única por microarray-SNP. Não foram detectadas alterações de número de cópias clinicamente relevantes."
    },
    {
        id: "snp_irmao",
        category: "Array-SNP",
        label: "Irmão afetado (II-2)",
        cost: 3000,
        type: "text",
        result: "<strong>Resultado array-SNP irmão afetado:</strong> Foram genotipados cerca de 500 mil polimorfismos de base única por microarray-SNP. Não foram detectadas alterações de número de cópias clinicamente relevantes."
    },

    // --- Cariótipo ---
    {
        id: "cariotipo_probando",
        category: "Cariótipo",
        label: "Probando (II-3)",
        cost: 600,
        type: "text",
        result: "<strong>Cariótipo com bandamento G probando:</strong> Material estudado: metáfases de linfócitos de sangue periférico. Foram analisadas 20 células. Observa-se cariótipo 46,XX,del(X)(p11.2). Não foram observadas outras alterações cromossômicas numéricas ou estruturais."
    },
    {
        id: "cariotipo_mae",
        category: "Cariótipo",
        label: "Mãe (I-1)",
        cost: 600,
        type: "text",
        result: "<strong>Cariótipo com bandamento G mãe:</strong> Material estudado: metáfases de linfócitos de sangue periférico. Foram analisadas 20 células. Cariótipo 46,XX, sem alterações numéricas ou estruturais identificadas."
    },
    {
        id: "cariotipo_pai",
        category: "Cariótipo",
        label: "Pai (I-2)",
        cost: 600,
        type: "text",
        result: "<strong>Resultado cariótipo com bandamento G pai:</strong> Material estudado: metáfases de linfócitos de sangue periférico. Foram analisadas 20 células. Cariótipo 46,XY, sem alterações numéricas ou estruturais identificadas."
    },
    {
        id: "cariotipo_irmao",
        category: "Cariótipo",
        label: "Irmão (II-2)",
        cost: 600,
        type: "text",
        result: "<strong>Resultado cariótipo com bandamento G irmão afetado:</strong> Material estudado: metáfases de linfócitos de sangue periférico. Foram analisadas 20 células. Cariótipo 46,XY, sem alterações numéricas ou estruturais identificadas."
    },

    // --- FISH ---
    {
        id: "fish_probando",
        category: "FISH",
        label: "Probando (II-3)",
        cost: 600,
        type: "text",
        result: "<strong>Resultado FISH probando:</strong> Hibridização in situ fluorescente utilizando-se sondas distribuídas ao longo do cromossomo X evidenciou a presença de apenas um sinal de fluorescência para a região Xp11.2 em cada metáfase analisada, compatível com deleção de uma das cópias de Xp11.2. Sonda de controle em outra região do X mostrou dois sinais, confirmando deleção parcial do X em Xp11.2."
    },
    {
        id: "fish_mae",
        category: "FISH",
        label: "Mãe (I-1)",
        cost: 600,
        type: "text",
        result: "<strong>Resultado FISH mãe:</strong> Hibridização in situ fluorescente utilizando-se sondas distribuídas ao longo do cromossomo X não revelou alterações numéricas, estruturais ou CNVs neste cromossomo."
    },
    {
        id: "fish_pai",
        category: "FISH",
        label: "Pai (I-2)",
        cost: 600,
        type: "text",
        result: "<strong>Resultado FISH pai:</strong> Hibridização in situ fluorescente utilizando-se sondas distribuídas ao longo do cromossomo X não revelou alterações numéricas, estruturais ou CNVs neste cromossomo."
    },
    {
        id: "fish_irmao",
        category: "FISH",
        label: "Irmão afetado (II-2)",
        cost: 600,
        type: "text",
        result: "<strong>Resultado FISH irmão afetado:</strong> Hibridização in situ fluorescente utilizando-se sondas distribuídas ao longo do cromossomo X não revelou alterações numéricas, estruturais ou CNVs neste cromossomo."
    },
    
    // --- NGS e Outros ---
    {
        id: "exoma_probando",
        category: "NGS / Painéis",
        label: "NGS Exoma Probando",
        cost: 5000,
        type: "csv_filter",
        filename: "exoma_probanda.csv",
        resultTitle: "Resultado NGS exoma probando"
    },
    {
        id: "exoma_trio",
        category: "NGS / Painéis",
        label: "NGS Exoma Família (Trio)",
        cost: 10000,
        type: "csv_filter",
        filename: "exoma_familia.csv",
        resultTitle: "Resultado NGS exoma trio"
    },
    {
        id: "paternidade",
        category: "Outros",
        label: "Investigação de Paternidade",
        cost: 400,
        type: "text",
        result: "<strong>Resultado teste de paternidade:</strong> Foram genotipados 16 marcadores STR no material do probando e dos supostos pais biológicos. O teste confirma que o probando é filha biológica dos progenitores testados, com probabilidade de paternidade superior a 99,9%."
    },
    {
        id: "heredograma",
        category: "Outros",
        label: "Análise de Heredograma",
        cost: 0,
        type: "text",
        result: "<strong>Heredograma da Família:</strong><br><img src='heredograma.png' alt='Heredograma' style='max-width:100%; border-radius:8px; margin-top:10px;'>"
    },
    {
        id: "painel_probando",
        category: "NGS / Painéis",
        label: "NGS Painel Probando (Coagulopatias)",
        cost: 3000,
        type: "csv_filter",
        filename: "painel_probanda.csv",
        resultTitle: "Resultado NGS painel probando"
    },
    {
        id: "painel_trio",
        category: "NGS / Painéis",
        label: "NGS Painel Família (Trio)",
        cost: 6000,
        type: "csv_filter",
        filename: "painel_familia.csv",
        resultTitle: "Resultado NGS painel trio"
    }
];

let purchasedExams = new Set();
let activeTab = 'caso';
let pendingExamId = null; // Variável para controlar qual exame Sanger está sendo pedido

document.addEventListener("DOMContentLoaded", () => {
    updateMoneyDisplay(CONFIG.initialMoney, false);
    updateTimestamp();
    
    document.getElementById("password-button").addEventListener("click", tryLogin);
    document.getElementById("password-input").addEventListener("keypress", (e) => {
        if(e.key === "Enter") tryLogin();
    });
});

function tryLogin() {
    const input = document.getElementById("password-input").value;
    const errorMsg = document.getElementById("login-error");
    
    if (btoa(input) === CONFIG.accessHash) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("game-container").style.display = "flex";
        initExamCategories();
    } else {
        errorMsg.style.display = "block";
        setTimeout(() => errorMsg.style.display = "none", 2000);
    }
}

// SISTEMA DE ABAS
function switchTab(tabId) {
    activeTab = tabId;

    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    
    document.getElementById(`tab-${tabId}`).classList.add("active");
    
    const btnMap = { 'caso': 0, 'exames': 1, 'resultados': 2 };
    document.querySelectorAll(".tab-btn")[btnMap[tabId]].classList.add("active");

    if (tabId === 'resultados') {
        const badge = document.getElementById("notification-badge");
        if(badge) badge.style.display = "none";
    }
}

function updateMoneyDisplay(newValue, animate = true) {
    const element = document.getElementById("total-money");
    if (!animate) {
        CONFIG.money = newValue;
        element.innerText = formatCurrency(newValue);
        return;
    }
    const startValue = CONFIG.money;
    const endValue = newValue;
    const duration = 1000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        
        const currentMoney = startValue + (endValue - startValue) * ease;
        element.innerText = formatCurrency(currentMoney);

        if (progress < 1) requestAnimationFrame(update);
        else CONFIG.money = endValue;
    }
    requestAnimationFrame(update);
}

function formatCurrency(val) {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// --- LÓGICA DE CATEGORIAS (SIDEBAR) ---
function initExamCategories() {
    const categories = [...new Set(EXAMS_DB.map(e => e.category))];
    const container = document.getElementById("categories-list");
    container.innerHTML = "";

    categories.forEach((cat, index) => {
        const btn = document.createElement("button");
        btn.className = "category-btn";
        btn.innerText = cat;
        btn.onclick = () => showExamsByCategory(cat, btn);
        container.appendChild(btn);

        if (index === 0) showExamsByCategory(cat, btn);
    });
}

function showExamsByCategory(category, btnElement) {
    if (btnElement) {
        document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        btnElement.classList.add("active");
    }

    document.getElementById("selected-category-title").innerText = category;
    const container = document.getElementById("exams-grid");
    container.innerHTML = "";
    
    const filteredExams = EXAMS_DB.filter(e => e.category === category);

    filteredExams.forEach(exam => {
        const isBought = purchasedExams.has(exam.id);
        const div = document.createElement("div");
        div.className = "exam-card";
        
        div.innerHTML = `
            <div>
                <div class="exam-header"><span>${exam.label}</span></div>
                <span class="exam-cost">${formatCurrency(exam.cost)}</span>
            </div>
            <button class="exam-btn" id="btn-${exam.id}" 
                ${isBought ? 'disabled' : ''} 
                onclick="buyExam('${exam.id}')">
                ${isBought ? 'Liberado' : 'Solicitar Exame'}
            </button>
        `;
        container.appendChild(div);
    });
}

// --- SISTEMA DE COMPRA E RESULTADOS ---

function buyExam(examId) {
    if (purchasedExams.has(examId)) return;
    const exam = EXAMS_DB.find(e => e.id === examId);
    if (!exam) return;
    
    // Verificação de saldo
    if (CONFIG.money < exam.cost) { 
        showToast("Saldo insuficiente!", "error"); 
        return; 
    }

    // --- NOVA LÓGICA SANGER: Se for Sanger, pergunta o gene ANTES de cobrar/processar ---
    if (exam.type === 'input_gene') {
        pendingExamId = examId;
        openGeneModal(); // Abre o modal para digitar o gene
        return; // Interrompe a função aqui
    }

    // Se não for Sanger, segue o fluxo normal
    executePurchase(exam, null);
}

// Funções do Modal de Gene
function openGeneModal() {
    document.getElementById('gene-modal-input').value = ""; // Limpa input anterior
    document.getElementById('gene-modal').style.display = "flex";
    document.getElementById('gene-modal-input').focus();
}

function closeGeneModal() {
    document.getElementById('gene-modal').style.display = "none";
    pendingExamId = null;
}

function confirmGeneRequest() {
    const geneInput = document.getElementById('gene-modal-input').value.trim().toUpperCase();
    
    if (!geneInput) {
        alert("Por favor, digite o nome do gene.");
        return;
    }
    
    // Recupera o exame pendente
    const exam = EXAMS_DB.find(e => e.id === pendingExamId);
    
    closeGeneModal();
    
    // Executa a compra passando o gene digitado
    executePurchase(exam, geneInput);
}

// Função centralizada para descontar dinheiro e iniciar timer
function executePurchase(exam, userGeneInput) {
    updateMoneyDisplay(CONFIG.money - exam.cost);
    purchasedExams.add(exam.id);
    
    const btn = document.getElementById(`btn-${exam.id}`);
    if(btn) {
        btn.innerText = "Em análise...";
        btn.disabled = true;
    }
    
    showToast(`Exame solicitado. Resultado em ${CONFIG.examDelay/1000}s...`, "info");

    // Timer de processamento
    setTimeout(() => {
        const btnNow = document.getElementById(`btn-${exam.id}`);
        if(btnNow) btnNow.innerText = "Liberado";
        
        processResult(exam, userGeneInput); // Passa o gene inputado (se houver)
        
        if (activeTab !== 'resultados') {
            showToast("Novo resultado disponível!", "success");
            const badge = document.getElementById("notification-badge");
            if(badge) badge.style.display = "block"; 
        } else {
            showToast("Resultado atualizado!", "success");
        }
        
    }, CONFIG.examDelay);
}


function processResult(exam, userGeneInput) {
    const resultsDiv = document.getElementById("results");
    const emptyState = resultsDiv.querySelector('.empty-state');
    if(emptyState) emptyState.remove();

    const card = document.createElement("div");
    card.className = "result-flashcard";
    
    const time = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    let headerHtml = `
        <div class="result-header">
            <div class="result-title">
                <span>🔬 ${exam.category}: ${exam.label}</span>
            </div>
            <div class="result-badges">
                <span class="timestamp">${time}</span>
                <span class="badge-new">NOVO</span>
            </div>
        </div>
    `;

    let bodyContent = "";

    // Lógica de Exibição do Resultado
    if (exam.type === "input_gene") {
        // Se for Sanger, verificamos AGORA se o gene digitado está correto
        // userGeneInput vem do modal que abrimos antes
        if (exam.correctGenes.includes(userGeneInput)) {
            bodyContent = `<div style="padding:10px; background:#f0fdf4; border-left:4px solid green; border-radius:4px;">
                ${exam.successResult}
            </div>`;
        } else {
            bodyContent = `<div style="padding:10px; background:#f8fafc; border-left:4px solid #94a3b8; border-radius:4px; color:#64748b;">
                ${exam.failResult} <br><strong>(Gene analisado: ${userGeneInput})</strong>
            </div>`;
        }
    } 
    else if (exam.type === "csv_filter") {
        bodyContent = `<div id="csv-container-${exam.id}"><p>Carregando dados do sequenciamento...</p></div>`;
        fetch(exam.filename)
            .then(res => {
                if(!res.ok) throw new Error("Arquivo CSV não encontrado.");
                return res.text();
            })
            .then(text => {
                const container = document.getElementById(`csv-container-${exam.id}`);
                if(container) container.innerHTML = generateHtmlFromCSV(exam.resultTitle, text, exam.filename);
            })
            .catch(err => {
                const container = document.getElementById(`csv-container-${exam.id}`);
                if(container) container.innerHTML = `<p style="color:red">Erro ao carregar dados: ${err.message}</p>`;
            });
    } 
    else {
        bodyContent = exam.result;
    }

    card.innerHTML = headerHtml + `<div class="result-body">${bodyContent}</div>`;
    resultsDiv.prepend(card);
}

function generateHtmlFromCSV(title, csvText, filename) {
    if (!csvText || !csvText.trim()) return `<strong>${title}:</strong> Arquivo vazio.`;

    const rows = csvText.trim().split("\n");
    const separator = rows[0].includes(";") ? ";" : ",";
    
    const blob = new Blob(["\uFEFF" + csvText], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    let html = `<div><strong>${title}</strong> (${rows.length - 1} variantes encontradas). `;
    html += `<a href="${url}" download="${filename}" style="color:var(--primary); text-decoration:none; font-size:0.8rem;">📥 Baixar CSV</a></div>`;

    html += '<div class="result-table-container"><table class="result-table"><thead><tr>';
    
    const headers = rows[0].split(separator);
    headers.forEach(h => html += `<th>${h.trim()}</th>`);
    html += '</tr></thead><tbody>';
    
    for(let i=1; i<rows.length; i++) {
        let line = rows[i].trim();
        if(!line) continue;
        
        let cols = line.split(separator);
        let isHighlight = false;
        if(cols[1] && cols[1].toUpperCase().includes("F8")) isHighlight = true;

        html += `<tr ${isHighlight ? 'class="highlight-variant"' : ''}>`;
        cols.forEach(c => html += `<td>${c.trim()}</td>`);
        html += '</tr>';
    }
    
    html += '</tbody></table></div>';
    return html;
}

function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    if(type === "error") toast.style.background = "#ef4444";
    if(type === "success") toast.style.background = "#10b981";
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function updateTimestamp() {
    const now = new Date();
    document.getElementById("timestamp").innerText = `Sessão iniciada em: ${now.toLocaleDateString()} às ${now.toLocaleTimeString()}`;
}

// --- CONTROLE DE JOGO (MODAL DIAGNÓSTICO) ---

function openDiagnosisModal() {
    document.getElementById("diagnosis-modal").style.display = "flex";
}

function closeDiagnosisModal() {
    document.getElementById("diagnosis-modal").style.display = "none";
}

function submitDiagnosis() {
    const text = document.getElementById("diagnosis-text").value;
    if (text.length < 10) {
        alert("Por favor, escreva um diagnóstico mais detalhado.");
        return;
    }
    
    closeDiagnosisModal();
    
    const spent = CONFIG.initialMoney - CONFIG.money;
    const efficiency = Math.round((CONFIG.money / CONFIG.initialMoney) * 100);
    
    alert(`🎉 CASO FINALIZADO!\n\n💰 Você economizou: ${formatCurrency(CONFIG.money)} (${efficiency}% do orçamento).\n💸 Custo total: ${formatCurrency(spent)}\n\nSua análise foi registrada (simulação). Tire um print para enviar à professora!`);
    
    document.querySelectorAll("button").forEach(b => b.disabled = true);
}