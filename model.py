# ---------------------------------------------------------
# مشروع: محلل المشاعر الذكي (Sentiment Analyzer)
# الوصف: نظام خبير لتصنيف النصوص إلى (إيجابي، سلبي، محايد)
# ---------------------------------------------------------

class SentimentExpertSystem:
    def __init__(self):
        # قاعدة البيانات للكلمات المفتاحية (Knowledge Base)
        self.positive_keywords = [
            'ممتاز', 'جميل', 'رائع', 'بطل', 'شكرا', 'مفيد', 
            'استمر', 'رهيب', 'أحببته', 'سريع', 'واضح', 'مبدع'
        ]
        
        self.negative_keywords = [
            'سيء', 'ضعيف', 'مخيب', 'بطيء', 'رديء', 'خسارة', 
            'فاشل', 'كرهته', 'معقد', 'صعب', 'غالي', 'مزعج'
        ]

    def analyze(self, text):
        """
        المحرك الاستدلالي (Inference Engine):
        يقوم بتحليل النص المدخل ومقارنته بقاعدة المعرفة.
        """
        score = 0
        words = text.split()

        for word in words:
            if word in self.positive_keywords:
                score += 1
            elif word in self.negative_keywords:
                score -= 1
        
        # اتخاذ القرار بناءً على الدرجة النهائية
        if score > 0:
            return "إيجابي (Positive) 😊"
        elif score < 0:
            return "سلبي (Negative) 😞"
        else:
            return "محايد (Neutral) 😐"

# مثال لتجربة النظام (يمكنك تشغيله للتأكد)
if name == "__main__":
    expert = SentimentExpertSystem()
    sample_text = "الموقع رائع جدا واستخدامه سهل وسريع"
    result = expert.analyze(sample_text)
    print(f"نص التجربة: {sample_text}")
    print(f"تحليل النظام: {result}")