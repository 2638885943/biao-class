const ok   = true;
const list = [
  {
    'id'      : 1,
    'title'   : '叫我王花花',
    'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\n',
  },
  {
    'id'      : 2,
    'title'   : '叫我李拴蛋',
    'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\n',
  },
  {
    'id'      : 3,
    'title'   : '叫我刘备备',
    'content' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse odio sed vitae! Architecto odio placeat quasi. Accusamus asperiores aspernatur delectus dolorum, ea enim ex expedita facere fugiat, molestias perferendis?\n',
  },
];

const output = {
  get,
  post,
}

function get (url, succeed, error) {
  if (ok)
    if (succeed)
      succeed(list);
    else {
      if (error)
        error({
          ok      : false,
          message : 'invalid page',
        });
    }
}

function post () {

}

export default output;