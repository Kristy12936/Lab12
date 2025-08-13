<template>
  <div class="container mt-4">
    <h2 class="mb-4">📚 Add a New Book</h2>

    <form @submit.prevent="addBook">
      <div class="mb-3">
        <label for="isbn" class="form-label">ISBN (数字)</label>
        <input
          type="number"
          id="isbn"
          class="form-control"
          v-model="isbn"
          required
        />
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">书名</label>
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="name"
          required
        />
      </div>

      <button type="submit" class="btn btn-success">添加书籍</button>
    </form>

    <!--  显示图书列表 -->
    <BookList />
  </div>
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'
import BookList from '../components/BookList.vue' //  引入图书查询组件

export default {
  name: 'AddBookView',
  components: {
    BookList
  },
  setup() {
    const isbn = ref('')
    const name = ref('')

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number.')
          return
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        })

        alert('✅ The book was added successfully!')
        isbn.value = ''
        name.value = ''
      } catch (error) {
        console.error('❌ Error adding book:', error)
        alert('Failed to add book. See console for details.')
      }
    }

    return {
      isbn,
      name,
      addBook
    }
  }
}
</script>

<style scoped>
h2 {
  color: #2c3e50;
}
</style>
