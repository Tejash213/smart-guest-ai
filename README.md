# 🧠 Smart Guest Experience Optimizer

An AI-powered application that detects **emotion** and **clothing style** from an uploaded image and suggests music accordingly — creating a personalized guest experience.

## 🎯 Project Objective

To enhance the hospitality experience by understanding guests' mood and style using AI, and providing real-time recommendations like music or other interactive content.

---

## 🚀 Live Demo

🔗 **Try it live on Hugging Face**: [smart-guest-ai](https://huggingface.co/spaces/Tejash213/smart-guest-ai)

---

## 📸 How It Works

1. **Upload Image**: The user uploads a photo.
2. **AI Detection**: 
   - **Emotion Detection** using DeepFace
   - **Clothing Style Analysis** using a basic keyword-matching method from fashion labels
3. **Music Suggestion**: Based on detected mood and style (can be upgraded to real music integration later).

---

## 🛠️ Technologies Used

| Component             | Tech Stack                             |
|----------------------|-----------------------------------------|
| Notebook Development | Python + Google Colab                   |
| Emotion Detection    | [`deepface`](https://github.com/serengil/deepface) |
| UI Interface         | [`Gradio`](https://www.gradio.app/)     |
| Deployment           | [Hugging Face Spaces](https://huggingface.co/spaces) |
| Version Control      | Git & GitHub                            |

---

## 📁 Project Structure

```
smart-guest-ai/
├── app.py                    # Gradio interface code
├── requirements.txt          # Python dependencies
├── Smart_Guest_AI_V2.ipynb   # Development notebook
└── README.md                 # Project documentation
```

---

## 🧪 How to Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/Tejash213/smart-guest-ai.git
cd smart-guest-ai
```

### 2. Create virtual environment (optional)
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the app
```bash
python app.py
```

Then open the `localhost` link shown in the terminal to test it live.

---

## 📌 Future Scope

- 🎵 Integrate actual music streaming APIs (Spotify/YouTube)
- 📸 Enhance clothing detection using pretrained fashion classification models
- 🌐 Deploy on a custom domain
- 📊 Add analytics to track user engagement

---

## 🙋‍♂️ Author

**S. Tejash**

- GitHub: [@Tejash213](https://github.com/Tejash213)
- LinkedIn: [s-tejash-96b70a262](https://linkedin.com/in/s-tejash-96b70a262)

---

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub and sharing the demo link!
