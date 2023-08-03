const axios = require('axios');

function createArray(N) {
  return Array.from({ length: N }, (_, index) => index + 1);
}

setTimeout(async () => {
  const d = createArray(3000);

  console.time('order');
  // for (let index = 0; index < d.length; index++) {
  //   const element = d[index];
  //   try {
  //     const res = await axios({
  //       method: 'post',
  //       url: 'http://localhost:5005/add',
  //       timeout: 800000,
  //       data: {
  //         description: 'test dex',
  //       },
  //     });
  //     // console.log(res.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  let opt = {
    success: 0,
    failed: 0,
  };
  // await Promise.all(
  //   d.map(async (_val, index) => {
  //     try {
  //       const res = await axios({
  //         method: 'post',
  //         url: 'http://localhost:5005/add',
  //         timeout: 800000,
  //         data: {
  //           description: 'test dex',
  //           index,
  //         },
  //       });
  //       opt.success++;
  //     } catch (error) {
  //       // console.log(error.message);
  //       opt.failed++;
  //     }
  //   })
  // );

  console.timeEnd('order');
  console.log(opt);

  const res = await axios({
    method: 'get',
    url: 'http://localhost:5005',
    timeout: 800000,
  });

  console.log(res.data);
}, 1000 * 3);
