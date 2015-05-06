'use strict';

/**
 * Utility function to generate a UUID in Javascript shamelessly borrowed from
 * stackoverflow
 */
function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

module.exports = function module(todos) {

  return {
    findAll : function findAll(callback) {
      callback(null, todos);
    },

    addTodo : function addTodo(content, callback) {
      // In a real application, you would persist here to the database
      // Instead, we are updating our in-memory data

      var todo = {
        id : uuid(),
        content : content
      };

      todos.push(todo);

      callback(null, todo);
    },

    updateTodo : function updateTodo(id, content, callback) {
      for (var i = 0; i < todos.length; ++i) {
        if (id === todos[i].id) {
          todos[i].content = content;
          return callback();
        }
      }

      callback(new Error('todo with id ' + id + ' not found.'));
    },

    deleteTodo : function deleteTodo(id, callback) {
      for (var i = 0; i < todos.length; ++i) {
        if (id === todos[i].id) {
          todos.splice(i, 1);
          return callback();
        }
      }
      callback(new Error('todo with id ' + id + ' not found.'));
    }
  };
};
