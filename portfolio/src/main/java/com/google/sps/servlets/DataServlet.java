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
  
  Gson gson = new Gson();
    String json = gson.toJson(check);
   
    response.setContentType("text/html;");
    response.getWriter().println(json);
    
  }


    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // If the user sends another POST request after the game is over, then start a new game.
    if (game.isGameOver()) {
      game = new SubtractionGame();
    }

    // Get the input from the form.
    int playerChoice = getPlayerChoice(request);
    if (playerChoice == -1) {
      response.setContentType("text/html");
      response.getWriter().println("Please enter an integer between 1 and 3.");
      return;
    }

    game.takePlayerTurn(playerChoice);

    // Redirect back to the HTML page.
    response.sendRedirect("/index.html");
  }

}
