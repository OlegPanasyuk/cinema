const gapi = window.gapi;
console.log(gapi);
function prom(gapiCall, argObj) {
  return new Promise((resolve, reject) => {
    gapiCall(argObj).then(
      resp => {
        if (resp && (resp.status < 200 || resp.status > 299)) {
          console.log('GAPI call returned bad status', resp);
          reject(resp);
        } else {
          resolve(resp);
        }
      },
      err => {
        console.log('GAPI call failed', err);
        reject(err);
      }
    );
  });
}

async function createEmptyFile(name, mimeType) {
  const drive = window.gapi.client.drive;
  const responce = await drive.files.create({
    resource: {
      name,
      // для создания папки используйте
      // mimeType = 'application/vnd.google-apps.folder'
      mimeType: 'text/plain',
      // вместо 'appDataFolder' можно использовать ID папки
      parents: ['appDataFolder'],
    },
    fields: 'id',
  });
  console.log(responce);
  //   const resp = await prom(gapi.client.drive.files.create, {
  //     resource: {
  //       name,
  //       // для создания папки используйте
  //       // mimeType = 'application/vnd.google-apps.folder'
  //       mimeType: mimeType || 'text/plain',
  //       // вместо 'appDataFolder' можно использовать ID папки
  //       parents: ['appDataFolder'],
  //     },
  //     fields: 'id',
  //   });
  // функция возвращает строку — идентификатор нового файла
  return responce;
}

const createFile = () => {
  const drive = window.gapi.client.drive;
  //   const responce = await drive.files.create({
  //     resource: {
  //       name: 'TestFile',
  //       // для создания папки используйте
  //       // mimeType = 'application/vnd.google-apps.folder'
  //       mimeType: 'text/plain',
  //       // вместо 'appDataFolder' можно использовать ID папки
  //       parents: ['appDataFolder'],
  //     },
  //     fields: 'id',
  //   });
  let token;
  console.log(drive);
  drive.files.list(
    {
      // вместо 'appDataFolder' можно использовать ID папки
      spaces: 'appDataFolder',
      fields: 'files(id, name), nextPageToken',
      pageSize: 100,
      pageToken: token,
      orderBy: 'createdTime',
    },
    function(err, res) {
      if (err) {
        // Handle error
        console.error(err);
      } else {
        res.files.forEach(function(file) {
          console.log('Found file:', file.name, file.id);
        });
      }
    }
  );
  return 'responce';
};

export default { createFile, createEmptyFile };
