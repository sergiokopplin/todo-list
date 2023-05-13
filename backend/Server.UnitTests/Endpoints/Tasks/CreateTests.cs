using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using NSubstitute;
using NSubstitute.ReturnsExtensions;
using Server.Contracts.Dtos;
using Server.Contracts.Requests;
using Server.Repositories;
using Xunit;

namespace Server.UnitTests.Endpoints.Tasks;

public class CreateTests
{
    private readonly ITaskRepository _repository = Substitute.For<ITaskRepository>();

    [Fact]
    public async Task Should_Return500_WhenUserIdIsNull()
    {
        // Arrange
        var request = new CreateTaskReq();

        // Act
        var response = await Server.Endpoints.Tasks.Create.HandleAsync(
            request,
            new DefaultHttpContext(),
            _repository);

        // Assert
        Assert.IsAssignableFrom<IResult>(response);

        var errorResponse = (StatusCodeHttpResult) response.Result;

        Assert.Equal(StatusCodes.Status500InternalServerError, errorResponse.StatusCode);
    }

    [Fact]
    public async Task Should_Return_500_WhenRepoReturnsNull()
    {
        // Arrange
        var request = new CreateTaskReq
        {
            Title = "New task"
        };

        _repository.CreateAsync(request, Helpers.UserId.ToString()).ReturnsNullForAnyArgs();

        // Act
        var response = await Server.Endpoints.Tasks.Create.HandleAsync(
            request,
            Helpers.ValidHttpContext,
            _repository);

        // Assert
        Assert.IsAssignableFrom<IResult>(response);
        Assert.IsType<StatusCodeHttpResult>(response.Result);

        var errorResponse = (StatusCodeHttpResult) response.Result;

        Assert.Equal(StatusCodes.Status500InternalServerError, errorResponse.StatusCode);
    }

    [Fact]
    public async Task Should_ReturnCreated_WhenOk()
    {
        // Arrange
        var request = new CreateTaskReq
        {
            Title = "New task"
        };

        var responseDto = new TaskDto
        {
            Title = request.Title,
            UserId = Helpers.UserId.ToString()
        };


        _repository.CreateAsync(request, Helpers.UserId.ToString()).Returns(responseDto);

        // Act
        var response = await Server.Endpoints.Tasks.Create.HandleAsync(
            request,
            Helpers.ValidHttpContext,
            _repository);

        // Assert
        Assert.IsAssignableFrom<IResult>(response);
        Assert.IsType<Created<TaskDto>>(response.Result);

        var okResponse = (Created<TaskDto>) response.Result;

        Assert.Equal(responseDto, okResponse.Value);
    }
}