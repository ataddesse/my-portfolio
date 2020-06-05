 
 
package com.google.sps.servlets;


import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;

import com.google.gson.Gson;
//import com.google.sps.data.Task;
import java.util.ArrayList;
import java.util.List;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.sps.data.Comment;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */

@WebServlet("/list-post")
public class ListCommentServlet extends HttpServlet {

 @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      
    response.setContentType("text/html;");
    response.setContentType("application/json;");
    Query query = new Query("Messages").addSort("timestamp", SortDirection.DESCENDING);
    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);
    
    ArrayList<String> Comments = new ArrayList<String>();
    for (Entity entity : results.asIterable()) {
     
      long id = entity.getKey().getId();
      String comments = (String) entity.getProperty("comment");
      long timestamp = (long) entity.getProperty("timestamp");
      Comments.add(comments);
    }

    for(String mess : Comments){
        System.out.println(mess);
    }

    Gson gson = new Gson();

    response.setContentType("application/json;");
    response.getWriter().println(gson.toJson(Comments));
 
  }

}