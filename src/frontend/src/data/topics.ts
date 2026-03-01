export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Resource {
  title: string;
  url: string;
  type: "Course" | "Video" | "Tutorial" | "Documentation";
}

export interface Topic {
  id: number;
  title: string;
  difficulty: Difficulty;
  shortDescription: string;
  fullDescription: string;
  keyConcepts: string[];
  resources: Resource[];
  emoji: string;
  estimatedHours: number;
}

export const topics: Topic[] = [
  {
    id: 1,
    title: "Introduction to AI",
    difficulty: "Beginner",
    emoji: "🤖",
    estimatedHours: 4,
    shortDescription:
      "What is artificial intelligence, its history, and real-world applications",
    fullDescription:
      "Artificial Intelligence is the science of making machines that can think, learn, and act intelligently. From Alan Turing's foundational ideas in the 1950s to today's large language models, AI has evolved dramatically. In this module, you'll understand what AI actually is, how it differs from traditional programming, and where it's applied in the real world — from medical diagnosis to self-driving cars.",
    keyConcepts: [
      "Defining AI: narrow vs. general vs. super AI",
      "Brief history: Turing test, AI winters, modern deep learning",
      "Types of AI systems: rule-based, learning-based",
      "Real-world applications: healthcare, finance, robotics, NLP",
      "AI vs. Machine Learning vs. Deep Learning distinctions",
      "Ethical considerations and AI bias fundamentals",
    ],
    resources: [
      {
        title: "AI For Everyone — Andrew Ng (Coursera)",
        url: "https://www.coursera.org/learn/ai-for-everyone",
        type: "Course",
      },
      {
        title: "Elements of AI (Free Course)",
        url: "https://www.elementsofai.com/",
        type: "Course",
      },
      {
        title: "3Blue1Brown: But what is a neural network?",
        url: "https://www.youtube.com/watch?v=aircAruvnKk",
        type: "Video",
      },
    ],
  },
  {
    id: 2,
    title: "Machine Learning Basics",
    difficulty: "Beginner",
    emoji: "📊",
    estimatedHours: 8,
    shortDescription:
      "Supervised, unsupervised, and reinforcement learning concepts",
    fullDescription:
      "Machine Learning is the backbone of modern AI. Instead of programming explicit rules, you teach machines by showing them examples. This module covers the three main paradigms: supervised learning (learning from labeled examples), unsupervised learning (finding hidden patterns), and reinforcement learning (learning through reward and punishment). You'll understand the math and intuition behind algorithms like linear regression, decision trees, and clustering.",
    keyConcepts: [
      "Supervised learning: regression and classification",
      "Unsupervised learning: clustering and dimensionality reduction",
      "Reinforcement learning: agents, rewards, and policies",
      "Training, validation, and test sets — why they matter",
      "Overfitting, underfitting, and the bias-variance tradeoff",
      "Common algorithms: linear regression, k-NN, decision trees, k-means",
    ],
    resources: [
      {
        title: "Machine Learning Specialization — Andrew Ng (Coursera)",
        url: "https://www.coursera.org/specializations/machine-learning-introduction",
        type: "Course",
      },
      {
        title: "Kaggle Learn — Intro to Machine Learning",
        url: "https://www.kaggle.com/learn/intro-to-machine-learning",
        type: "Tutorial",
      },
      {
        title: "StatQuest: Machine Learning Fundamentals",
        url: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
        type: "Video",
      },
    ],
  },
  {
    id: 3,
    title: "Python for AI",
    difficulty: "Beginner",
    emoji: "🐍",
    estimatedHours: 10,
    shortDescription:
      "Essential Python skills: NumPy, Pandas, Matplotlib for data science",
    fullDescription:
      "Python is the lingua franca of AI and data science. This module gets you up to speed with the essential libraries every AI practitioner uses. NumPy gives you fast numerical computation with arrays and matrices. Pandas provides powerful data manipulation and analysis tools. Matplotlib and Seaborn help you visualize data to understand patterns. You'll also get comfortable with Jupyter notebooks, the industry-standard environment for AI development.",
    keyConcepts: [
      "Python fundamentals: functions, classes, list comprehensions",
      "NumPy: arrays, broadcasting, vectorized operations",
      "Pandas: DataFrames, data cleaning, merging, groupby",
      "Matplotlib/Seaborn: histograms, scatter plots, heatmaps",
      "Jupyter notebooks: interactive development workflow",
      "Scikit-learn basics: train/test split, model fitting, metrics",
    ],
    resources: [
      {
        title: "Python for Data Science — Kaggle Learn",
        url: "https://www.kaggle.com/learn/python",
        type: "Tutorial",
      },
      {
        title: "NumPy Official Quickstart Tutorial",
        url: "https://numpy.org/doc/stable/user/quickstart.html",
        type: "Documentation",
      },
      {
        title: "Python Data Science Handbook (free online)",
        url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
        type: "Tutorial",
      },
    ],
  },
  {
    id: 4,
    title: "Neural Networks",
    difficulty: "Intermediate",
    emoji: "🧠",
    estimatedHours: 12,
    shortDescription:
      "How neurons, layers, weights, and activation functions work",
    fullDescription:
      "Neural networks are inspired by the human brain and are the fundamental building block of modern AI. A neural network learns by adjusting millions of weighted connections through a process called backpropagation. This module teaches you the mathematics behind neurons, activation functions, forward propagation, loss functions, and gradient descent. By the end, you'll understand exactly what happens inside a neural network during training.",
    keyConcepts: [
      "Perceptrons and the multi-layer architecture",
      "Activation functions: ReLU, sigmoid, tanh, softmax",
      "Forward propagation: computing predictions",
      "Loss functions: MSE, cross-entropy",
      "Backpropagation and the chain rule",
      "Gradient descent and learning rate tuning",
      "Regularization: dropout, L1/L2",
    ],
    resources: [
      {
        title: "3Blue1Brown: Neural Networks Series",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
        type: "Video",
      },
      {
        title: "Neural Networks and Deep Learning — fast.ai",
        url: "https://course.fast.ai/",
        type: "Course",
      },
      {
        title: "DeepLearning.AI: Neural Networks and Deep Learning",
        url: "https://www.coursera.org/learn/neural-networks-deep-learning",
        type: "Course",
      },
    ],
  },
  {
    id: 5,
    title: "Deep Learning",
    difficulty: "Intermediate",
    emoji: "⚡",
    estimatedHours: 16,
    shortDescription:
      "CNNs, RNNs, transformers, and modern deep learning architectures",
    fullDescription:
      "Deep learning unlocks AI superpowers through specialized architectures. Convolutional Neural Networks (CNNs) revolutionized computer vision by automatically learning visual features. Recurrent Neural Networks (RNNs) and LSTMs handle sequential data like text and speech. The Transformer architecture — the foundation of GPT, BERT, and modern LLMs — changed everything with the attention mechanism. This module gives you a thorough understanding of these architectures and when to use each.",
    keyConcepts: [
      "Convolutional layers, pooling, and feature maps",
      "Classic CNN architectures: LeNet, VGG, ResNet",
      "Recurrent networks: RNNs, LSTMs, GRUs",
      "Attention mechanism and self-attention",
      "The Transformer architecture explained",
      "Transfer learning and fine-tuning pre-trained models",
      "Batch normalization, skip connections",
    ],
    resources: [
      {
        title: "Practical Deep Learning for Coders — fast.ai",
        url: "https://course.fast.ai/",
        type: "Course",
      },
      {
        title: "Deep Learning Specialization — Coursera",
        url: "https://www.coursera.org/specializations/deep-learning",
        type: "Course",
      },
      {
        title: "Andrej Karpathy: Neural Networks Zero to Hero",
        url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
        type: "Video",
      },
    ],
  },
  {
    id: 6,
    title: "Natural Language Processing",
    difficulty: "Intermediate",
    emoji: "💬",
    estimatedHours: 14,
    shortDescription:
      "Text processing, tokenization, embeddings, and language models",
    fullDescription:
      "Natural Language Processing enables computers to understand, generate, and reason about human language. Starting from basic text preprocessing (tokenization, stemming, stopwords), you'll progress to word embeddings like Word2Vec and GloVe, and finally to modern transformer-based models like BERT and GPT. This module bridges classical NLP with the large language model revolution that powers today's AI assistants.",
    keyConcepts: [
      "Text preprocessing: tokenization, stopwords, stemming, lemmatization",
      "Bag of Words and TF-IDF representations",
      "Word embeddings: Word2Vec, GloVe, FastText",
      "Sequence-to-sequence models and attention",
      "BERT: bidirectional transformers for understanding",
      "GPT: generative pre-trained transformers",
      "Prompt engineering and fine-tuning LLMs",
    ],
    resources: [
      {
        title: "HuggingFace NLP Course (Free)",
        url: "https://huggingface.co/learn/nlp-course/",
        type: "Course",
      },
      {
        title: "Stanford CS224N: NLP with Deep Learning",
        url: "https://web.stanford.edu/class/cs224n/",
        type: "Course",
      },
      {
        title: "Kaggle: Natural Language Processing",
        url: "https://www.kaggle.com/learn/natural-language-processing",
        type: "Tutorial",
      },
    ],
  },
  {
    id: 7,
    title: "Computer Vision",
    difficulty: "Advanced",
    emoji: "👁️",
    estimatedHours: 18,
    shortDescription:
      "Image classification, object detection, and image generation",
    fullDescription:
      "Computer Vision teaches machines to interpret and understand the visual world. From classifying images with ResNet to detecting and locating objects with YOLO, to generating photorealistic images with Stable Diffusion — this module covers the full spectrum of vision AI. You'll learn about data augmentation strategies, evaluation metrics like mAP and IoU, and hands-on implementation with modern frameworks.",
    keyConcepts: [
      "Image classification with CNNs and transfer learning",
      "Object detection: YOLO, Faster R-CNN, SSD architectures",
      "Semantic and instance segmentation",
      "Image data augmentation strategies",
      "Evaluation metrics: accuracy, mAP, IoU, precision/recall",
      "Generative models: GANs and Diffusion models",
      "Vision Transformers (ViT) and CLIP",
    ],
    resources: [
      {
        title: "CS231n: CNNs for Visual Recognition (Stanford)",
        url: "https://cs231n.github.io/",
        type: "Course",
      },
      {
        title: "fast.ai: Practical Deep Learning — Vision",
        url: "https://course.fast.ai/",
        type: "Course",
      },
      {
        title: "Roboflow Blog: Computer Vision Tutorials",
        url: "https://blog.roboflow.com/",
        type: "Tutorial",
      },
    ],
  },
  {
    id: 8,
    title: "TensorFlow & PyTorch",
    difficulty: "Advanced",
    emoji: "🔧",
    estimatedHours: 20,
    shortDescription: "Hands-on frameworks for building and training AI models",
    fullDescription:
      "TensorFlow and PyTorch are the two dominant frameworks that power AI research and production systems worldwide. PyTorch is favored for research with its dynamic computation graphs and Pythonic feel. TensorFlow/Keras excels in production deployment with its ecosystem of tools. This module gives you hands-on experience with both — building, training, saving, and deploying real neural network models on real datasets.",
    keyConcepts: [
      "PyTorch: tensors, autograd, and dynamic computation graphs",
      "Building models with nn.Module and Sequential",
      "Custom training loops: forward pass, loss, backward, optimizer step",
      "TensorFlow/Keras: model building with the functional API",
      "Callbacks, TensorBoard, and training monitoring",
      "Saving, loading, and exporting models for deployment",
      "GPU acceleration and batch processing",
    ],
    resources: [
      {
        title: "PyTorch Official Tutorials",
        url: "https://pytorch.org/tutorials/",
        type: "Documentation",
      },
      {
        title: "TensorFlow Official Tutorials",
        url: "https://www.tensorflow.org/tutorials",
        type: "Documentation",
      },
      {
        title: "Google ML Crash Course",
        url: "https://developers.google.com/machine-learning/crash-course",
        type: "Course",
      },
    ],
  },
];

export interface FreeResource {
  name: string;
  description: string;
  url: string;
  badge: string;
  color: "cyan" | "amber";
}

export const freeResources: FreeResource[] = [
  {
    name: "fast.ai",
    description:
      "World-class deep learning course, completely free. Built for practitioners.",
    url: "https://www.fast.ai",
    badge: "Deep Learning",
    color: "cyan",
  },
  {
    name: "Coursera: Machine Learning",
    description:
      "Andrew Ng's legendary ML course — the most popular AI course ever made.",
    url: "https://www.coursera.org/learn/machine-learning",
    badge: "Machine Learning",
    color: "amber",
  },
  {
    name: "Google ML Crash Course",
    description:
      "Google's own machine learning course with interactive exercises and real-world case studies.",
    url: "https://developers.google.com/machine-learning/crash-course",
    badge: "Crash Course",
    color: "cyan",
  },
  {
    name: "Kaggle Learn",
    description:
      "Hands-on micro-courses covering Python, ML, deep learning, NLP, and more — all free.",
    url: "https://www.kaggle.com/learn",
    badge: "Hands-on",
    color: "amber",
  },
  {
    name: "3Blue1Brown: Neural Networks",
    description:
      "Stunning visual explanations of neural networks that make the math intuitive.",
    url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
    badge: "Visual Learning",
    color: "cyan",
  },
];
