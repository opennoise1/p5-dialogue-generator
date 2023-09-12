/*
This file contains the code needed to algorithmically create the costume folders
for each character emotion, along with the files they need to be put in.


////////CHARACTER MENU/////
  useEffect(() => {
    fetch('/folder', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }, [])

/////////SERVER////////
app.put('/folder', portraitController.folderCreator, (req, res) => {
  return res.status(200);
})


///////PORTRAIT CONTROLLER///////

---FOR CREATING FOLDERS---

let directory = path.join(__dirname, '../images/portraits/');

const newFolder = (directory) => {
  let files = readdirSync(directory);
  if (files[0] === '.DS_Store') {
    files = files.slice(1);
  }

  for (const file of files) {
    const absolute = path.join(directory, file);
    console.log(statSync(absolute).isDirectory());
    if (statSync(absolute).isDirectory()) {
      newFolder(absolute); 
    } else {
        const lengthMinusPNG = file.length - 4;
        let folderName;
        for (let i = lengthMinusPNG; i > 0; i -= 1) {
          if (file[i] === '-') {
            folderName = file.slice(i + 1, lengthMinusPNG);
            break;
          }
        }
        
        mkdirSync(path.join(directory, `${folderName}`));
    }
  }
  return;
}

portraitController.folderCreator = (req, res, next) => {
  newFolder(directory);
  return;
}

---FOR DELETING PORTRAITS---

let directory = path.join(__dirname, '../images/portraits/');

const deleteFiles = (directory) => {
  let files = readdirSync(directory);
  if (files[0] === '.DS_Store') {
    files = files.slice(1);
  }

  for (const file of files) {
    const absolute = path.join(directory, file);
    console.log(statSync(absolute).isDirectory());
    if (statSync(absolute).isDirectory()) {
      deleteFiles(absolute); 
    } else {
        unlinkSync(absolute);
    }
  }
  return;
}

portraitController.fileDeleter = (req, res, next) => {
  deleteFiles(directory);
  return;
}

*/