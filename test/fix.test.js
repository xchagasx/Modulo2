
// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//       expect('Java').toBe('JavaScript'); // Deveria falhar!
//       done();
//     }, 500);
//   });
  
  

test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {
        expect('Java').toBe('JavaScript');
        done();
      } catch (error) {
        done(error);
      }
    }, 500);
  });
  
  