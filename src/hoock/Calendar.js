import { useState } from 'react';

const useCategoryHook = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const addCategory = () => {
    if (newCategory) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  return { categories, setCategories,newCategory, setNewCategory, addCategory };
};

export default useCategoryHook;
