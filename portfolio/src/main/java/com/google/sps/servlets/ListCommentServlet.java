 
 
package com.google.sps.servlets;


import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;

import com.google.gson.Gson;
import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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

    String numResultsString = (request.getQueryString());
    int reqResults = Integer.parseInt(numResultsString);
    
    for (Entity entity : results.asIterable()) {
         reqResults--;
         long id = entity.getKey().getId();
        response.getWriter().println(entity.getProperty("first_name"));
        response.getWriter().println(entity.getProperty("last_name"));
        response.getWriter().println(entity.getProperty("email"));
        response.getWriter().println(entity.getProperty("comment"));
        response.getWriter().println(entity.getProperty("timestamp"));
        response.getWriter().println("\n");
         if (reqResults <= 0) break;

    }


 
  }

}