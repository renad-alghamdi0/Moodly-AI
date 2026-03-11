function analyzeSentiment() {
    const textInput = document.getElementById('commentInput').value.trim();
    const resultCard = document.getElementById('resultCard');
    const resultText = document.getElementById('resultText');
    
    // إذا لم يتم كتابة شيء، لا تفعل شيئاً
    if (!textInput) {
        resultCard.classList.add('hidden');
        return;
    }

    // قواعد البيانات البسيطة (Expert System Logic)
    const positiveWords = ['ممتاز', 'جميل', 'رائع', 'بطل', 'شكرا', 'مفيد', 'استمر', 'رهيب', 'أحببته', 'سريع', 'واضح'];
    const negativeWords = ['سيء', 'ضعيف', 'مخيب', 'بطيء', 'رديء', 'خسارة', 'فاشل', 'كرهته', 'معقد', 'صعب', 'غالي'];

    let score = 0;
    
    // التحليل: زيادة الدرجة للكلمات الإيجابية ونقصها للسلبية
    positiveWords.forEach(word => {
        if (textInput.includes(word)) score++;
    });

    negativeWords.forEach(word => {
        if (textInput.includes(word)) score--;
    });

    // تنسيق وعرض النتيجة بناءً على الدرجة
    let finalResult = "";
    let resultClass = "";

    if (score > 0) {
        finalResult = "<span>إيجابي</span> <span>😊</span>";
        resultClass = "positive";
    } else if (score < 0) {
        finalResult = "<span>سلبي</span> <span>😞</span>";
        resultClass = "negative";
    } else {
        finalResult = "<span>محايد</span> <span>😐</span>";
        resultClass = "neutral";
    }

    // تطبيق النتيجة وإظهار البطاقة بحركة ناعمة
    resultText.innerHTML = finalResult;
    resultText.className = "result-text " + resultClass; // مسافة قبل resultClass
    resultCard.classList.remove('hidden');
}