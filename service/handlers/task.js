const {
  createNewTask,
  reorderTasksInSameList,
  switchTasksBetweenLists,
  updateTaskProperty,
} = require("../src/task");

module.exports.create = (event) => {
  const promise = new Promise((resolve) => {
    const body = JSON.parse(event.body);
    if (body.boardId && body.task && body.listId && body.taskIds) {
      createNewTask(body.boardId, body.task, body.listId, body.taskIds)
        .then((data) => {
          const response = {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              statusCode: 200,
              data: data,
            }),
          };
          resolve(response);
        })
        .catch((err) => {
          const response = {
            statusCode: 500,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              statusCode: 500,
              error: err,
            }),
          };
          resolve(response);
        });
    } else {
      const response = {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          statusCode: 400,
          message: "Missing body element",
        }),
      };
      resolve(response);
    }
  });
  return promise;
};

module.exports.reorder = (event) => {
  const promise = new Promise((resolve) => {
    const body = JSON.parse(event.body);
    if (body.boardId && body.listId && body.taskIds) {
      reorderTasksInSameList(body.boardId, body.listId, body.taskIds)
        .then((data) => {
          const response = {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              statusCode: 200,
              data: data,
            }),
          };
          resolve(response);
        })
        .catch((err) => {
          const response = {
            statusCode: 500,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              statusCode: 500,
              error: err,
            }),
          };
          resolve(response);
        });
    } else {
      const response = {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          statusCode: 400,
          message: "Missing body element",
        }),
      };
      resolve(response);
    }
  });
  return promise;
};

module.exports.switch = (event) => {
  const promise = new Promise((resolve) => {
    const body = JSON.parse(event.body);
    if (body.boardId && body.lists) {
      switchTasksBetweenLists(body.boardId, body.lists)
        .then((data) => {
          const response = {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              statusCode: 200,
              data: data,
            }),
          };
          resolve(response);
        })
        .catch((err) => {
          const response = {
            statusCode: 500,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              statusCode: 500,
              error: err,
            }),
          };
          resolve(response);
        });
    } else {
      const response = {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          statusCode: 400,
          message: "Missing body element",
        }),
      };
      resolve(response);
    }
  });
  return promise;
};

module.exports.update = (event) => {
  const promise = new Promise((resolve) => {
    const { boardId, taskId, property, data } = JSON.parse(event.body);
    if (boardId && taskId && property && data) {
      updateTaskProperty(boardId, taskId, property, data)
        .then((data) => {
          const response = {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              statusCode: 200,
              data: data,
            }),
          };
          resolve(response);
        })
        .catch((err) => {
          const response = {
            statusCode: 500,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              statusCode: 500,
              error: err,
            }),
          };
          resolve(response);
        });
    } else {
      const response = {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          statusCode: 400,
          message: "Missing body element",
        }),
      };
      resolve(response);
    }
  });
  return promise;
};
