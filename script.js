// 랜덤 데이터 생성
const equipmentData = [
    {
        id: 1,
        name: 'DW-5000 복합기',
        category: '복합기',
        status: 'good',
        acquired: '2021-06-15',
        location: '3층 회의실',
        responsible: '김영희',
        quantity: 1,
        specifications: 'A3/A4 흑백, 컬러',
        memo: '정상 작동 중',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 250%22%3E%3Crect width=%22300%22 height=%22250%22 fill=%22%23f0f0f0%22/%3E%3Crect x=%2250%22 y=%2230%22 width=%22200%22 height=%22150%22 fill=%22%23666%22 stroke=%22%23333%22 stroke-width=%222%22/%3E%3Crect x=%2270%22 y=%2250%22 width=%22160%22 height=%2230%22 fill=%22%23999%22/%3E%3Crect x=%2260%22 y=%2290%22 width=%22180%22 height=%2260%22 fill=%22%23ccc%22/%3E%3Ccircle cx=%2275%22 cy=%22180%22 r=%2215%22 fill=%22%23333%22/%3E%3Ccircle cx=%22225%22 cy=%22180%22 r=%2215%22 fill=%22%23333%22/%3E%3Ctext x=%22150%22 y=%22225%22 font-size=%2216%22 text-anchor=%22middle%22 fill=%22%23333%22%3EDW-5000%3C/text%3E%3C/svg%3E'
    },
    {
        id: 2,
        name: '프린터 HP M281',
        category: '프린터',
        status: 'good',
        acquired: '2022-03-20',
        location: '2층 사무실',
        responsible: '이준호',
        quantity: 1,
        specifications: '컬러 레이저, A4',
        memo: '토너 재고 충분',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 250%22%3E%3Crect width=%22300%22 height=%22250%22 fill=%22%23f0f0f0%22/%3E%3Crect x=%2250%22 y=%2250%22 width=%22200%22 height=%22120%22 fill=%22%23333%22 stroke=%22%23000%22 stroke-width=%222%22/%3E%3Crect x=%2270%22 y=%2260%22 width=%22160%22 height=%2220%22 fill=%22%23666%22/%3E%3Crect x=%2270%22 y=%2290%22 width=%22160%22 height=%2260%22 fill=%22%23999%22/%3E%3Crect x=%2250%22 y=%22180%22 width=%22200%22 height=%2240%22 fill=%22%23ddd%22/%3E%3Ctext x=%22150%22 y=%22225%22 font-size=%2214%22 text-anchor=%22middle%22 fill=%22%23333%22%3EHP M281%3C/text%3E%3C/svg%3E'
    },
    {
        id: 3,
        name: '스캐너 Fujitsu',
        category: '스캐너',
        status: 'warning',
        acquired: '2020-11-10',
        location: '1층 문서실',
        responsible: '박미진',
        quantity: 1,
        specifications: 'A4/A3, 600dpi',
        memo: '유지보수 예정',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 250%22%3E%3Crect width=%22300%22 height=%22250%22 fill=%22%23f0f0f0%22/%3E%3Crect x=%2250%22 y=%2240%22 width=%22200%22 height=%22100%22 fill=%22%23555%22 stroke=%22%23333%22 stroke-width=%222%22/%3E%3Crect x=%2260%22 y=%2250%22 width=%22180%22 height=%2280%22 fill=%22%23bbb%22/%3E%3Crect x=%2265%22 y=%2260%22 width=%22170%22 height=%2260%22 fill=%22%23ddd%22/%3E%3Crect x=%2250%22 y=%22150%22 width=%22200%22 height=%2260%22 fill=%22%23888%22/%3E%3Ctext x=%22150%22 y=%22225%22 font-size=%2214%22 text-anchor=%22middle%22 fill=%22%23333%22%3EFujitsu%3C/text%3E%3C/svg%3E'
    },
    {
        id: 4,
        name: '팩스기 Brother',
        category: '팩스',
        status: 'alert',
        acquired: '2019-05-22',
        location: '3층 회의실',
        responsible: '정수진',
        quantity: 1,
        specifications: 'A4 팩스/프린터',
        memo: '수리 필요',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 250%22%3E%3Crect width=%22300%22 height=%22250%22 fill=%22%23f0f0f0%22/%3E%3Crect x=%2260%22 y=%2240%22 width=%22180%22 height=%22140%22 fill=%22%23222%22 stroke=%22%23000%22 stroke-width=%222%22/%3E%3Crect x=%2270%22 y=%2260%22 width=%22160%22 height=%2220%22 fill=%22%23666%22/%3E%3Crect x=%2270%22 y=%2290%22 width=%22160%22 height=%2260%22 fill=%22%23bbb%22/%3E%3Crect x=%2280%22 y=%22160%22 width=%22140%22 height=%2215%22 fill=%22%23444%22/%3E%3Ctext x=%22150%22 y=%22225%22 font-size=%2214%22 text-anchor=%22middle%22 fill=%22%23333%22%3EBrother%3C/text%3E%3C/svg%3E'
    },
    {
        id: 5,
        name: '분쇄기 HSM',
        category: '분쇄기',
        status: 'good',
        acquired: '2023-01-12',
        location: '1층 로비',
        responsible: '최동욱',
        quantity: 1,
        specifications: '세로 절단식, A4',
        memo: '신규 구입',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 250%22%3E%3Crect width=%22300%22 height=%22250%22 fill=%22%23f0f0f0%22/%3E%3Crect x=%2260%22 y=%2240%22 width=%22180%22 height=%22150%22 fill=%22%23444%22 stroke=%22%23333%22 stroke-width=%222%22/%3E%3Crect x=%2270%22 y=%2250%22 width=%22160%22 height=%22130%22 fill=%22%23888%22/%3E%3Crect x=%2275%22 y=%2260%22 width=%22150%22 height=%22110%22 fill=%22%23aaa%22/%3E%3Cpath d=%22M 100 100 L 200 100 L 200 140 L 100 140 Z%22 fill=%22%23333%22/%3E%3Ctext x=%22150%22 y=%22225%22 font-size=%2214%22 text-anchor=%22middle%22 fill=%22%23333%22%3EHSM%3C/text%3E%3C/svg%3E'
    },
    {
        id: 6,
        name: '복사기 리코',
        category: '복사기',
        status: 'good',
        acquired: '2022-08-05',
        location: '4층 전산실',
        responsible: '신은희',
        quantity: 1,
        specifications: '풀컬러, A3',
        memo: '월 유지비 납부 완료',
        image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 250%22%3E%3Crect width=%22300%22 height=%22250%22 fill=%22%23f0f0f0%22/%3E%3Crect x=%2240%22 y=%2230%22 width=%22220%22 height=%22160%22 fill=%22%23555%22 stroke=%22%23000%22 stroke-width=%222%22/%3E%3Crect x=%2250%22 y=%2245%22 width=%22200%22 height=%2230%22 fill=%22%23999%22/%3E%3Crect x=%2250%22 y=%2280%22 width=%22200%22 height=%2280%22 fill=%22%23ccc%22/%3E%3Ccircle cx=%2270%22 cy=%22200%22 r=%2220%22 fill=%22%23333%22/%3E%3Ccircle cx=%22230%22 cy=%22200%22 r=%2220%22 fill=%22%23333%22/%3E%3Ctext x=%22150%22 y=%22225%22 font-size=%2214%22 text-anchor=%22middle%22 fill=%22%23333%22%3ERicoh%3C/text%3E%3C/svg%3E'
    }
];

const consumableData = [
    {
        model: 'DW-5000',
        consumable: '토너 (검정색)',
        specs: '대용량',
        quantity: 3,
        lastReplaced: '2026-07-10',
        memo: '정상'
    },
    {
        model: 'DW-5000',
        consumable: '토너 (노란색)',
        specs: '표준',
        quantity: 2,
        lastReplaced: '2026-07-15',
        memo: '정상'
    },
    {
        model: 'DW-5000',
        consumable: '토너 (파란색)',
        specs: '표준',
        quantity: 1,
        lastReplaced: '2026-08-01',
        memo: '재주문 필요'
    },
    {
        model: 'DW-5000',
        consumable: '토너 (빨간색)',
        specs: '표준',
        quantity: 2,
        lastReplaced: '2026-07-20',
        memo: '정상'
    },
    {
        model: 'HP M281',
        consumable: '토너 (검정색)',
        specs: 'CF410A',
        quantity: 4,
        lastReplaced: '2026-06-15',
        memo: '충분'
    },
    {
        model: 'HP M281',
        consumable: '토너 (컬러셋)',
        specs: 'CF411A/CF412A/CF413A',
        quantity: 1,
        lastReplaced: '2026-08-05',
        memo: '예비'
    }
];

// 상태 텍스트
const statusMap = {
    good: '정상',
    warning: '주의',
    alert: '긴급'
};

// 날짜 포맷팅
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 현재 날짜 표시
function setCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    document.getElementById('currentDate').textContent = `NO. ${Math.floor(Math.random() * 100) + 1} | 작성일자: ${year}-${month}-${day}`;
}

// 장비 카드 렌더링
function renderEquipmentCards() {
    const grid = document.getElementById('equipmentGrid');
    grid.innerHTML = '';

    equipmentData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'equipment-card';
        
        const statusClass = `status-${item.status}`;
        const statusText = statusMap[item.status];
        
        card.innerHTML = `
            <div class="equipment-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="card-header">
                <div class="equipment-name">${item.name}</div>
                <span class="status-badge ${statusClass}">${statusText}</span>
            </div>
            <div class="equipment-info">
                <div class="info-item">
                    <span class="info-label">카테고리</span>
                    <span class="info-value">${item.category}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">위치</span>
                    <span class="info-value">${item.location}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">담당자</span>
                    <span class="info-value">${item.responsible}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">수량</span>
                    <span class="info-value">${item.quantity}대</span>
                </div>
            </div>
            <div class="equipment-details">
                <div class="detail-row">
                    <span class="detail-label">구매일:</span>
                    <span class="detail-value">${formatDate(item.acquired)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">사양:</span>
                    <span class="detail-value">${item.specifications}</span>
                </div>
                ${item.memo ? `<div class="memo-box">📝 ${item.memo}</div>` : ''}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// 소모품 테이블 렌더링
function renderConsumableTable() {
    const tbody = document.getElementById('consumableTableBody');
    tbody.innerHTML = '';

    consumableData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.model}</td>
            <td>${item.consumable}</td>
            <td>${item.specs}</td>
            <td><strong>${item.quantity}</strong></td>
            <td>${formatDate(item.lastReplaced)}</td>
            <td>${item.memo}</td>
        `;
        tbody.appendChild(row);
    });
}

// 탭 전환
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 모든 탭 비활성화
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // 클릭한 탭 활성화
            btn.classList.add('active');
            const tabName = btn.getAttribute('data-tab');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

// 인쇄 기능
function printTable(tabName) {
    const tabContent = document.getElementById(tabName);
    const printWindow = window.open('', '', 'width=1200,height=800');
    
    const header = document.querySelector('.header').cloneNode(true);
    const sectionHeader = tabContent.querySelector('.section-header').cloneNode(true);
    sectionHeader.querySelector('.print-btn').remove();
    const content = tabContent.querySelector('.equipment-grid, .consumable-section') 
        ? tabContent.cloneNode(true) 
        : tabContent.cloneNode(true);
    
    content.querySelector('.print-btn')?.remove();

    const printContent = `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <title>비품관리대장 - 인쇄</title>
            <link rel="stylesheet" href="styles.css">
            <style>
                body { margin: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                .print-header { border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 20px; }
                @media print { body { margin: 0; } }
            </style>
        </head>
        <body>
            <div class="print-header">
                <h1 style="color: #003d9e; margin-bottom: 5px;">📋 비품관리대장</h1>
                <p style="color: #666; font-size: 14px; margin: 0;">인쇄일: ${new Date().toLocaleDateString('ko-KR')}</p>
            </div>
            ${content.innerHTML}
            <script>
                window.print();
                setTimeout(() => window.close(), 500);
            </script>
        </body>
        </html>
    `;
    
    printWindow.document.write(printContent);
    printWindow.document.close();
}

// 초기화
function init() {
    setCurrentDate();
    renderEquipmentCards();
    renderConsumableTable();
    setupTabs();
}

// 페이지 로드 시 실행
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}