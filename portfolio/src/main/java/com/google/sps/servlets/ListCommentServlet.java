 
 
package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;

import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.sps.data.Comment;
import java.lang.Long;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */

@WebServlet("/list-post")
public class ListCommentServlet extends HttpServlet {
    private List<Comment> comments = new ArrayList<>();

 @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    Query query = new Query("Messages").addSort("timestamp", SortDirection.DESCENDING);
    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);

    for (Entity entity : results.asIterable()) {
   
      long id = entity.getKey().getId();
      String com = (String) entity.getProperty("comment");
      Double score = (double)(Long)entity.getProperty("score");
      long timestamp = (long)entity.getProperty("timestamp");

      Comment comment = new Comment(com, score);

      comments.add(comment);
    } 
    response.setContentType("application/json;");
    response.getWriter().println(new Gson().toJson(comments)); 
  }

}