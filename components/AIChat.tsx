import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Send, Brain } from 'lucide-react-native';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

// Mock AI responses based on user input
const getAIResponse = (userMessage: string): string => {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  if (lowerCaseMessage.includes('merhaba') || lowerCaseMessage.includes('selam')) {
    return 'Merhaba! Size nasıl yardımcı olabilirim? Fitness, beslenme veya zihinsel gelişim konularında sorularınızı yanıtlayabilirim.';
  } else if (lowerCaseMessage.includes('kilo') || lowerCaseMessage.includes('zayıfla')) {
    return 'Kilo verme sürecinizde size yardımcı olabilirim. Sağlıklı kilo vermek için dengeli beslenme ve düzenli egzersiz çok önemlidir. Günlük kalori açığı oluşturmak, protein ağırlıklı beslenmek ve haftada en az 3-4 kez egzersiz yapmak iyi bir başlangıç olacaktır.';
  } else if (lowerCaseMessage.includes('egzersiz') || lowerCaseMessage.includes('antrenman')) {
    return 'Fitness hedeflerinize göre kişiselleştirilmiş egzersiz programları sunabilirim. Hangi bölgeye odaklanmak istiyorsunuz? Kardiyo, güç antrenmanı veya esneklik çalışmaları hakkında bilgi verebilirim.';
  } else if (lowerCaseMessage.includes('beslenme') || lowerCaseMessage.includes('diyet')) {
    return 'Beslenme konusunda size rehberlik edebilirim. Sağlıklı bir beslenme planı, çeşitli besin gruplarını içermeli ve vücudunuzun ihtiyaç duyduğu tüm besinleri sağlamalıdır. Protein, karbonhidrat ve sağlıklı yağlar arasında denge kurmak önemlidir.';
  } else if (lowerCaseMessage.includes('stres') || lowerCaseMessage.includes('anksiyete')) {
    return 'Stres yönetimi için size bazı teknikler önerebilirim. Düzenli meditasyon, derin nefes egzersizleri ve mindfulness uygulamaları stres seviyenizi düşürmeye yardımcı olabilir. Günde sadece 10 dakika meditasyon bile büyük fark yaratabilir.';
  } else if (lowerCaseMessage.includes('uyku') || lowerCaseMessage.includes('uyu')) {
    return 'İyi bir uyku sağlık için çok önemlidir. Düzenli bir uyku programı oluşturmak, yatmadan önce ekran kullanımını azaltmak ve yatak odanızı uyku için ideal bir ortam haline getirmek daha iyi uyumanıza yardımcı olabilir.';
  } else if (lowerCaseMessage.includes('meditasyon') || lowerCaseMessage.includes('mindfulness')) {
    return 'Meditasyon, zihinsel sağlığınızı iyileştirmenin harika bir yoludur. Başlangıç için günde 5-10 dakikalık rehberli meditasyonlar deneyebilirsiniz. Düzenli uygulama ile odaklanma yeteneğinizi artırabilir ve stres seviyenizi düşürebilirsiniz.';
  } else if (lowerCaseMessage.includes('motivasyon') || lowerCaseMessage.includes('hedef')) {
    return 'Motivasyonunuzu yüksek tutmak için küçük, ulaşılabilir hedefler belirleyin ve her başarıyı kutlayın. İlerlemenizi takip etmek ve başarılarınızı görselleştirmek de motivasyonunuzu artırabilir. Ayrıca, neden bu hedeflere ulaşmak istediğinizi hatırlamak da önemlidir.';
  } else {
    return 'Bu konuda size daha detaylı bilgi vermek isterim. Lütfen sorunuzu biraz daha açar mısınız? Fitness, beslenme, zihinsel gelişim veya genel sağlık konularında size yardımcı olabilirim.';
  }
};

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Merhaba! Ben ZekaKoç, yapay zeka destekli yaşam koçunuz. Size nasıl yardımcı olabilirim?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prevMessages => [...prevMessages, aiResponse]);
      
      // Scroll to bottom after new message
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <View style={styles.header}>
        <View style={styles.aiAvatarContainer}>
          <Brain color="#FFFFFF" size={24} />
        </View>
        <Text style={styles.headerTitle}>ZekaKoç AI</Text>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map(message => (
          <View
            key={message.id}
            style={[
              styles.messageBubble,
              message.sender === 'user' ? styles.userBubble : styles.aiBubble,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
            <Text style={styles.messageTime}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Bir mesaj yazın..."
          value={inputText}
          onChangeText={setInputText}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Send color="#FFFFFF" size={20} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  aiAvatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#333333',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  userBubble: {
    backgroundColor: '#E6F2FF',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    backgroundColor: '#F5F5F5',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#333333',
    lineHeight: 22,
  },
  messageTime: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#999999',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    maxHeight: 100,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
});