// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      disasterReportTitle: 'Disaster Report Form',
      name: 'Name',
      disasterType: 'Disaster Type',
      mobileNumber: 'Mobile Number',
      location: 'Location',
      primaryNeeds: 'Primary Needs',
      timeOfHit: 'Time of Hit',
      peopleAffected: 'People Affected',
      chooseFile: 'Choose File',
      submitReport: 'Submit Report',
      currentTime: 'Current Time',
      language: 'Language',
      english: 'English',
      spanish: 'Español',
      hindi: 'Hindi',
      telugu: 'Telugu',
      bengali: 'Bengali',
      tamil: 'Tamil',
    },
  },
  es: {
    translation: {
      disasterReportTitle: 'Formulario de Reporte de Desastres',
      name: 'Nombre',
      disasterType: 'Tipo de Desastre',
      mobileNumber: 'Número de Teléfono Móvil',
      location: 'Ubicación',
      primaryNeeds: 'Necesidades Primarias',
      timeOfHit: 'Hora del Desastre',
      peopleAffected: 'Personas Afectadas',
      chooseFile: 'Seleccionar Archivo',
      submitReport: 'Enviar Reporte',
      currentTime: 'Hora Actual',
      language: 'Idioma',
      english: 'Inglés',
      spanish: 'Español',
      hindi: 'Hindi',
      telugu: 'Telugu',
      bengali: 'Bengalí',
      tamil: 'Tamil',
    },
  },
  hi: {
    translation: {
      disasterReportTitle: 'आपदा रिपोर्ट फॉर्म',
      name: 'नाम',
      disasterType: 'आपदा का प्रकार',
      mobileNumber: 'मोबाइल नंबर',
      location: 'स्थान',
      primaryNeeds: 'प्राथमिक आवश्यकताएँ',
      timeOfHit: 'हिट का समय',
      peopleAffected: 'प्रभावित लोग',
      chooseFile: 'फ़ाइल चुनें',
      submitReport: 'रिपोर्ट भेजें',
      currentTime: 'वर्तमान समय',
      language: 'भाषा',
      english: 'अंग्रेज़ी',
      spanish: 'स्पेनिश',
      hindi: 'हिंदी',
      telugu: 'तेलुगु',
      bengali: 'बंगाली',
      tamil: 'तामिल',
    },
  },
  te: {
    translation: {
      disasterReportTitle: 'ఆపద నివేదికా ఫారం',
      name: 'పేరు',
      disasterType: 'ఆపద రకం',
      mobileNumber: 'మొబైల్ నంబర్',
      location: 'స్థానం',
      primaryNeeds: 'ప్రాథమిక అవసరాలు',
      timeOfHit: 'తగిన సమయం',
      peopleAffected: 'ప్రభావిత వ్యక్తులు',
      chooseFile: 'ఫైల్ ఎంచుకోండి',
      submitReport: 'నివేదించు',
      currentTime: 'ప్రస్తుత సమయం',
      language: 'భాష',
      english: 'ఇంగ్లీష్',
      spanish: 'స్పానిష్',
      hindi: 'హిందీ',
      telugu: 'తెలుగు',
      bengali: 'బెంగాలీ',
      tamil: 'తమిఴ్',
    },
  },
  bn: {
    translation: {
      disasterReportTitle: 'দুর্যোগ রিপোর্ট ফর্ম',
      name: 'নাম',
      disasterType: 'দুর্যোগের ধরণ',
      mobileNumber: 'মোবাইল নম্বর',
      location: 'অবস্থান',
      primaryNeeds: 'প্রাথমিক প্রয়োজনীয়তা',
      timeOfHit: 'আঘাতের সময়',
      peopleAffected: 'কতজন প্রভাবিত',
      chooseFile: 'ফাইল চয়ন করুন',
      submitReport: 'রিপোর্ট জমা দিন',
      currentTime: 'বর্তমান সময়',
      language: 'ভাষা',
      english: 'ইংরেজি',
      spanish: 'স্প্যানিশ',
      hindi: 'হিন্দি',
      telugu: 'তেলেগু',
      bengali: 'বাঙালি',
      tamil: 'তামিল',
    },
  },
  ta: {
    translation: {
      disasterReportTitle: 'பாழையுரிமை அறிக்கை படிவம்',
      name: 'பெயர்',
      disasterType: 'பாழை வகை',
      mobileNumber: 'கைபேசி எண்',
      location: 'இடம்',
      primaryNeeds: 'முதன்மை தேவைகள்',
      timeOfHit: 'காலம் தொடர்ந்து',
      peopleAffected: 'மக்கள் பாதிக்கப்பட்டனர்',
      chooseFile: 'கோப்பு தேர்ந்தெடு',
      submitReport: 'அறிக்கை சமர்ப்பிக்கவும்',
      currentTime: 'தற்போதைய நேரம்',
      language: 'மொழி',
      english: 'ஆங்கிலம்',
      spanish: 'ஸ்பானிஷ்',
      hindi: 'இந்தி',
      telugu: 'தெலுங்கு',
      bengali: 'வங்காளி',
      tamil: 'தமிழ்',
    },
  },
  // Add more languages and translations as needed
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;





