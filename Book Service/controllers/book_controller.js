// ./controllers/bookController.js
const Book = require('../models/book_model');

// Controller to create a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, description, publishedDate } = req.body;
    const newBook = new Book({ title, author, description, publishedDate });
    const savedBook = await newBook.save();
    res.json(savedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update a book by ID
exports.updateBookById = async (req, res) => {
  try {
    const { title, author, description, publishedDate } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, description, publishedDate },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a book by ID
exports.deleteBookById = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
