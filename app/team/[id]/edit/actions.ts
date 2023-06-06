export async function updateUser(formData: any, id: number) {
  'use server';

  fetch(`https://dummyjson.com/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
    }),
  })
    .then((res) => res.json())
    .then(console.log);
}