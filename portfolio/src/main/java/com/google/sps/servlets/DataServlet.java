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
import com.google.gson.Gson;
import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
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
  //Initializing a gson instance
  Gson gson = new Gson();
  //Converting the Arraystring to a Json. 
    String json = gson.toJson(check);
   
    response.setContentType("text/html;");
    response.getWriter().println(json);
    
  }

 @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

      //Fetching the parameters from html form in index.html
        String first_name = getParameter(request, "first_name", "");
    String last_name = getParameter(request, "last_name", "");
        String email = getParameter(request, "email", "");
    String comment = getParameter(request, "comment", "");



    long timestamp = System.currentTimeMillis();
    
    //Using the fetched variables with the taskEntity
    Entity taskEntity = new Entity("Messages");
    taskEntity.setProperty("message", text);
    taskEntity.setProperty("fname", fname);
    taskEntity.setProperty("lname", lname);
    taskEntity.setProperty("timestamp", timestamp);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(taskEntity);

    // Redirect back to the HTML page.
    response.sendRedirect("/index.html");
  }


 

}
