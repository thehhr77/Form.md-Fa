"use strict";
/* Farsi (fa) display data — slugs, meal categories, food names */
window.FA = window.FA || {};

window.FA.categories = {
  'waist': 'شکم و پهلو',
  'upper arms': 'بازو',
  'upper legs': 'ران',
  'back': 'پشت',
  'chest': 'سینه',
  'shoulders': 'سرشانه',
  'lower legs': 'ساق پا',
  'lower arms': 'ساعد',
  'cardio': 'هوازی',
  'neck': 'گردن'
};

window.FA.targets = {
  'abductors': 'دورکننده ران',
  'abs': 'شکم',
  'adductors': 'نزدیک‌کننده ران',
  'biceps': 'جلوبازو',
  'calves': 'ساق پا',
  'cardiovascular system': 'دستگاه گردش خون',
  'delts': 'سرشانه',
  'forearms': 'ساعد',
  'glutes': 'باسن',
  'hamstrings': 'پشت پا',
  'lats': 'زیربغل',
  'levator scapulae': 'بالابر کتف',
  'pectorals': 'سینه',
  'quads': 'چهارسر ران',
  'serratus anterior': 'دندانی قدامی',
  'spine': 'کمر',
  'traps': 'کول',
  'triceps': 'پشت‌بازو',
  'upper back': 'پشت بالا'
};

window.FA.equipment = {
  'assisted': 'دستگاه کمکی',
  'band': 'کش',
  'barbell': 'هالتر',
  'body weight': 'وزن بدن',
  'bosu ball': 'نیم‌توپ (بوسو)',
  'cable': 'سیم‌کش',
  'dumbbell': 'دمبل',
  'elliptical machine': 'الپتیکال',
  'ez barbell': 'هالتر خم (EZ)',
  'hammer': 'چکش',
  'kettlebell': 'کتل‌بل',
  'leverage machine': 'دستگاه',
  'medicine ball': 'توپ پزشکی',
  'olympic barbell': 'هالتر المپیک',
  'resistance band': 'کش مقاومتی',
  'roller': 'غلتک (رول)',
  'rope': 'طناب',
  'skierg machine': 'دستگاه اسکی (SkiErg)',
  'sled machine': 'دستگاه سورتمه',
  'smith machine': 'دستگاه اسمیت',
  'stability ball': 'توپ سوئیسی',
  'stationary bike': 'دوچرخه ثابت',
  'stepmill machine': 'پله‌برقی',
  'tire': 'لاستیک',
  'trap bar': 'هالتر شش‌ضلعی',
  'upper body ergometer': 'ارگومتر دست',
  'weighted': 'وزنه‌دار',
  'wheel roller': 'چرخ شکم'
};

window.FA.muscles = {
  'abdominals': 'شکم',
  'abductors': 'دورکننده ران',
  'ankle stabilizers': 'تثبیت‌کننده‌های مچ پا',
  'ankles': 'مچ پا',
  'back': 'پشت',
  'biceps': 'جلوبازو',
  'brachialis': 'بازویی (براکیالیس)',
  'calves': 'ساق پا',
  'chest': 'سینه',
  'core': 'میان‌تنه',
  'deltoids': 'سرشانه',
  'feet': 'کف پا',
  'forearms': 'ساعد',
  'glutes': 'باسن',
  'grip muscles': 'عضلات گیرش',
  'groin': 'کشاله ران',
  'hamstrings': 'پشت پا',
  'hands': 'مچ دست',
  'hip flexors': 'خم‌کننده‌های ران',
  'inner thighs': 'داخل ران',
  'latissimus dorsi': 'زیربغل',
  'lats': 'زیربغل',
  'lower abs': 'شکم پایین',
  'lower back': 'کمر',
  'obliques': 'پهلو',
  'quadriceps': 'چهارسر ران',
  'rear deltoids': 'سرشانه خلفی',
  'rhomboids': 'لوزی‌ها',
  'rotator cuff': 'کاسه شانه',
  'shins': 'ساق جلو',
  'shoulders': 'سرشانه',
  'soleus': 'دوقلو (سولئوس)',
  'sternocleidomastoid': 'جناغی-چنبری-پستانی',
  'trapezius': 'کول',
  'traps': 'کول',
  'triceps': 'پشت‌بازو',
  'upper back': 'پشت بالا',
  'upper chest': 'سینه بالا',
  'wrist extensors': 'بازکننده‌های مچ',
  'wrist flexors': 'خم‌کننده‌های مچ',
  'wrists': 'مچ دست'
};

window.FA.slug = function (value) {
  if (!value) return '';
  const v = String(value).toLowerCase().trim();
  return window.FA.categories[v] || window.FA.targets[v] || window.FA.equipment[v] || window.FA.muscles[v] || null;
};

window.FA.mealCategories = ['صبحانه', 'ناهار', 'شام', 'میان‌وعده'];

window.FA.foodCategories = {
  'custom': 'دیگر',
  'Poultry': 'مرغ',
  'Meat': 'گوشت قرمز',
  'Seafood': 'آبزیان',
  'Dairy/Eggs': 'لبنیات و تخم‌مرغ',
  'Grains': 'غلات',
  'Legumes': 'حبوبات',
  'Vegetables': 'سبزیجات',
  'Fruits': 'میوه‌ها',
  'Nuts/Fats': 'آجیل و چربی',
  'Supplements': 'مکمل‌ها',
  'Other': 'دیگر',
  'Breakfast': 'صبحانه',
  'Lunch': 'ناهار',
  'Dinner': 'شام',
  'Snacks': 'میان‌وعده'
};

window.FA.foodCat = function (value) {
  if (!value) return 'دیگر';
  return window.FA.foodCategories[value] || String(value);
};

/* Farsi names for the built-in food database, keyed by food id */
window.FA.foods = {};
