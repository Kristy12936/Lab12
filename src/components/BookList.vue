<!-- src/components/BookList.vue -->
<template>
  <div class="mt-5">
    <h4>📚 Books with ISBN > 1000</h4>
    <ul class="list-group">
      <li v-for="book in books" :key="book.id" class="list-group-item">
        <strong>{{ book.name }}</strong> - ISBN: {{ book.isbn }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../firebase/init'
import { collection, query, where, getDocs } from 'firebase/firestore'

const books = ref([])

const fetchBooks = async () => {
  try {
    const booksRef = collection(db, 'books')
    const q = query(booksRef, where('isbn', '>', 1000))
    const querySnapshot = await getDocs(q)
    

    books.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (error) {
    console.error('Error fetching books:', error)
  }
}

onMounted(() => {
  fetchBooks()
})
</script>
