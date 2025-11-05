fetch("/assets/data/placement.json")
  .then((res) => res.json())
  .then((data) => {
    const { applied, selected, pending, upcoming } = data.summary;

    // Update counts
    document.getElementById("appliedCount").textContent = applied;
    document.getElementById("selectedCount").textContent = selected;
    document.getElementById("pendingCount").textContent = pending;
    document.getElementById("upcomingCount").textContent = upcoming;

    // Table
    document.getElementById("driveData").innerHTML = data.drives
      .map(
        (d, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${d.company}</td>
          <td>${d.role}</td>
          <td><span class="badge ${
            d.status === "Selected"
              ? "bg-success"
              : d.status === "Pending"
              ? "bg-warning text-dark"
              : d.status === "Upcoming"
              ? "bg-info"
              : "bg-secondary"
          }">${d.status}</span></td>
          <td>${d.date}</td>
        </tr>`
      )
      .join("");

    // Chart
    const ctx = document.getElementById("placementChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Applied", "Selected", "Pending", "Upcoming"],
        datasets: [
          {
            data: [applied, selected, pending, upcoming],
            backgroundColor: ["#0d6efd", "#198754", "#ffc107", "#0dcaf0"],
          },
        ],
      },
      options: { plugins: { legend: { display: false } } },
    });
  })
  .catch((err) => console.error("Error:", err));
