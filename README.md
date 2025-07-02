# Smart Guest Experience Optimizer

This AI-powered web application automatically detects the **emotion** and **clothing style** of a guest from an uploaded image and suggests music accordingly to enhance their experience.

## 🔍 Features
- 🎭 Facial Emotion Detection (e.g., Happy, Sad, Neutral)
- 👗 Clothing Style Recognition (e.g., Punjabi, Western)
- 🎵 Music Suggestions based on detected mood and style

## 🚀 How It Works
1. Upload an image of a guest.
2. The app uses **DeepFace** to detect facial emotions.
3. It also analyzes the **clothing style** using image classification.
4. A relevant **music suggestion** is generated to match the detected mood and style.

## 🧠 Tech Stack
- Python
- Gradio (for UI)
- DeepFace (for facial analysis)
- TensorFlow & Keras
- Hugging Face Spaces (for deployment)

## 📦 Installation (For Local Setup)
```bash
git clone https://github.com/Tejash213/smart-guest-ai.git
cd smart-guest-ai
pip install -r requirements.txt
python app.py
