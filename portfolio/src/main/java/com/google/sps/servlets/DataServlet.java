// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

@WebServlet("/new-post")
public class DataServlet extends HttpServlet {
 private ArrayList<String> check; 
 public void init() {

    check = new ArrayList<String>();
    check.add("Mood");
    check.add("Summer");
    check.add("Style");
    check.add("WFH");
    check.add("Experience");
    check.add("Awesome!");

}

 
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    response.setContentType("application/json;");
    
    Query query = new Query("Messages").addSort("timestamp", SortDirection.DESCENDING);
    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

    PreparedQuery results = datastore.prepare(query); 

    for (Entity entity : results.asIterable()) {
         long id = entity.getKey().getId();
        response.getWriter().println(entity.getProperty("first_name"));
        response.getWriter().println(entity.getProperty("last_name"));
        response.getWriter().println(entity.getProperty("email"));
        response.getWriter().println(entity.getProperty("comment"));
        response.getWriter().println(entity.getProperty("timestamp"));
        response.getWriter().println("\n");

    }

  Gson gson = new Gson();
  response.setContentType("application/json;");
 
  }


 @Override

  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
   
    long timestamp = System.currentTimeMillis();
    
    //Using the fetched variables with the taskEntity
    Entity taskEntity = new Entity("Messages");
    taskEntity.setProperty("first_name", request.getParameter("first_name"));
    taskEntity.setProperty("last_name", request.getParameter("last_name"));
    taskEntity.setProperty("email", request.getParameter("email"));
    taskEntity.setProperty("comment", request.getParameter("comment"));
    taskEntity.setProperty("timestamp", timestamp);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(taskEntity);

    // Redirect back to the HTML page.
    response.sendRedirect("/index.html");
  }


 

}


